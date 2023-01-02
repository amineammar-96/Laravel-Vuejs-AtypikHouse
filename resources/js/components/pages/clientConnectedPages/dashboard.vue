<template>
  <div>
    <div class="content">
      <div class="dashboardContainer">
        <div class="leftSideBarDashboard">
          <ul class="leftSideBarUl">
            <li
              @click="windowStepFunction(1)"
              :class="windowStep == 1 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-tachometer-alt sideBarLinkIcon"></i>
              <span>Dashboard</span>
            </li>
            <li
              @click="windowStepFunction(2)"
              :class="windowStep == 2 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-comments sideBarLinkIcon"></i>
              <span>Messages</span
              ><span v-if="newMessageCheckPrimary" class="red statusRed"></span>
            </li>
            <li
              @click="windowStepFunction(3) && changeNotificationReadingState()"
              :class="windowStep == 3 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-bell sideBarLinkIcon"></i>
              <span>Notifications</span
              ><span v-if="newNotificationsCheck" class="red statusRed"></span>
            </li>

            <li
              @click="windowStepFunction(5)"
              :class="windowStep == 5 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-clock sideBarLinkIcon"></i>
              <span>Historiques</span>
            </li>
          </ul>
        </div>

        <div class="leftSideBarDashboardMobile">
          <div class="expand-collapse">
            <img
              src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"
              alt="expand-collapseIcon"
            />
            <div>
              <ul class="leftSideBarUl">
                <li
                  @click="windowStepFunction(1)"
                  :class="windowStep == 1 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-tachometer-alt sideBarLinkIcon"></i>

                  <span>Dashboard</span>
                </li>
                <li
                  @click="windowStepFunction(2)"
                  :class="windowStep == 2 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-comments sideBarLinkIcon"></i>
                  <span>Messages</span
                  ><span
                    v-if="newMessageCheckPrimary"
                    class="red statusRed"
                  ></span>
                </li>
                <li
                  @click="windowStepFunction(3)"
                  :class="windowStep == 3 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-bell sideBarLinkIcon"></i>

                  <span>Notifications</span
                  ><span
                    v-if="newNotificationsCheck"
                    class="red statusRed"
                  ></span>
                </li>
                <li
                  @click="windowStepFunction(5)"
                  :class="windowStep == 5 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-clock sideBarLinkIcon"></i>

                  <span>Historiques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-if="loading" class="loaderDivPage">
          <div class="loaderDiv" v-if="loading">
            <loadingPage />
          </div>
        </div>


        <div class="loaderDiv" v-if="!loading">
          <div class="rightSideDashboard">
            <!-- Dashboard  -->
            <div v-if="windowStep == 1" class="dashboardStep">
              <div id="root">
  <div class="container p-5 pt-2">
    <div class="row align-items-stretch">
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Réservations</h4><span class="hind-font caption-12 c-dashboardInfo__count">{{ reservationCount }}</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Montant total payé</h4>
          <span class="hind-font caption-12 c-dashboardInfo__count">€{{ totalAmount }}</span>   </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Nombre de nuits</h4><span class="hind-font caption-12 c-dashboardInfo__count">{{ totalNightsCount }}</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Point Fidélité</h4><span class="hind-font caption-12 c-dashboardInfo__count">{{ (totalNightsCount*4.354).toFixed(0) }}</span>
        </div>
      </div>
    </div>
  </div>
              </div>
                <div class="lastReservationsDiv">
                                 <h1>Dérniéres réservations</h1>
                                 <div>
                                      <div class="historiquesStepContainer">
                <div class="row">
                  <div
                    style="
                      margin-bottom: 50px;
                      justify-content: center;
                      display: flex;
                    "
                    :style="lastThreeReservations.length==1 ? 'width:100%;' : '' "
                    v-for="(reservation, key) in lastThreeReservations"
                    :key="key"
                    class="col-xl-6 col-md-6 col-sm-12"
                  >
                    <div class="historiquesStepCard">
                      <div v-if="reservation.images" class="box-1">
                        <img
                          style="height: 100%"
                          :src="
                            '/storage/' +
                            reservation.images[0].path +
                            '/' +
                            reservation.images[0].image
                          "
                          :alt="reservation.id + '-' + reservation.created_at"
                        />
                        <div class="green"></div>
                      </div>
                      <div class="box-2">
                        <div
                          v-if="reservation.reservationState == 'Prochainement'"
                          :class="
                            reservation.reservationState == 'Prochainement'
                              ? 'reservationStateDivBlue'
                              : '' && reservation.bookState == 'En cours'
                              ? 'reservationStateDivGreen'
                              : '' && reservation.bookState == 'Annulée'
                              ? 'reservationStateDivDisplayNone'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <div
                          v-if="reservation.reservationState == 'En cours'"
                          :class="
                            reservation.reservationState == 'En cours'
                              ? 'reservationStateDivGreen'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <div
                          v-if="reservation.reservationState == 'Annulée'"
                          :class="
                            reservation.reservationState == 'Annulée'
                              ? 'reservationStateDivDisplayNone'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <div
                          v-if="reservation.reservationState == 'Passée'"
                          :class="
                            reservation.reservationState == 'Passée'
                              ? 'reservationStateDivPassed'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <h3>
                          {{ reservation.annonce.title }} <br />
                          #ATK0003429
                        </h3>
                        <p>
                          Date d'arrivé : {{ reverseDate(reservation.checkIn) }}
                        </p>
                        <br />
                        <p>
                          Date de départ :
                          {{ reverseDate(reservation.checkOut) }}
                        </p>
                        <br />

                        <p>Nombre de nuits : {{ reservation.nightCount }}</p>

                        <br />
                        <p>Payée : € {{ reservation.amount }}</p>
                        <br />
                        <p>Date de réservation :{{ reservation.created_at }}</p>
                        <br />
                        <p>{{ reservation.annonce.city }}</p>

                        <br />
                        <div class="shop"></div>
                        <div
                          v-if="reservation.bookState == 'Annulée'"
                          class="canceledReservation"
                        >
                          Réservation annulée
                        </div>
                        <div
                          v-if="reservation.bookState == 'Annulée'"
                          class="canceledReservation"
                        >
                          Le {{ reservation.updated_at }}
                        </div>

                      <!-- <div
                          style="text-align: end"
                          v-if="reservation.bookState == 'Annulée'"
                        >
                          <i
                            style="
                              color: lightgrey;
                              font-size: 20px;
                              cursor: pointer;
                            "
                            class="fas fa-trash"
                            @click="deleteReservation(reservation.id)"
                          ></i>
                        </div>

                        <div
                          v-if="
                                reservation.reservationState != 'Annulée' && reservation.reservationState != 'Prochainement'
                          "
                          class="card-foot"
                        >
                          <button
                            @click="cancelReservation(reservation.id)"
                            class="btn btn-danger"
                          >
                            Annuler
                          </button>
                        </div>

                        <div
                          v-if="
                            reservation.reservationState != 'Annulée' &&
                            (reservation.reservationState == 'En cours' ||
                              reservation.reservationState == 'Passée')
                          "
                          class="card-foot"
                        >
                          <button
                            @click="choseWhichAnnonce(reservation.annonce.id)"
                            data-bs-toggle="modal"
                            data-bs-target="#commentReservationModal"
                            class="btn btnCommenter"
                          >
                            Commenter
                          </button>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                                 </div>
                </div>

                <div class="lastSeenAnnonces">
                    <h1>Vu récemment</h1>

                     <div v-show="threeLastVisits" class="containerCards containerCardsAux">
          <div
            v-for="(annonce, key) in threeLastVisits"
            :key="key"
            class="box boxAux"
          >
            <router-link
              style="text-decoration: none; width: 100%;"
              :to="'/annonce/?id=' + annonce.id"
              class="text-dark"
            >
              <div class="top" v-if="annonce">
                <img
                  v-if="annonce.images[0]"
                  :src="
                    'storage/' +
                    annonce.images[0].path +
                    '/' +
                    annonce.images[0].image
                  "
                />
              </div>
              <div class="bottom">
                <h3>{{ annonce.title }}</h3>
                <div>
                  <div class="location">
                    <i
                      style="margin-right: 7px"
                      class="fas fa-map-marker-alt"
                    ></i
                    ><span> {{ annonce.city }} </span>
                  </div>
                </div>
                <div class="advants">
                  <div>
                    <div>
                      <i class="fas fa-bed"></i
                      ><span> {{ annonce.numberOfBeds }} </span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <i class="fas fa-users"></i
                      ><span>{{ annonce.capacity }}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <i class="fas fa-vector-square"></i
                      ><span>{{ annonce.surface }}<span>Cm²</span></span>
                    </div>
                  </div>
                </div>
                <div class="price">
<span>
                    €{{ parseFloat(annonce.price).toFixed(2) }}
                    <small style="font-size: 16px">/nuit</small>
                  </span>
                </div>

                <div style="display: flex; justify-content: end">
                  <div
                    style="position: absolute; top: -44px; left: 15px"
                    class="price"
                  >
                    <star-rating
                    v-if="annonce.rating>0"
                      :padding="3"
                      :animate="true"
                      :star-size="20"
                      :show-rating="false"
                      :read-only="true"
                      :rating="annonce.rating"
                    ></star-rating>
                  </div>
                </div>
                <div class="typeLogement">
                  <span> {{ annonce.typeLogement }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
                </div>
            </div>

            <!-- Messages  -->
            <div v-if="windowStep == 2" class="messagesStep">
              <div class="container">
                <h1 style="position: absolute">Messagerie</h1>

                <div class="row clearfix">
                  <div class="col-lg-12">
                    <div
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 97vh;
                      "
                      v-if="!conversations.length > 0"
                    >
                      <img
                        style="width: 40%"
                        src="../../../../../public/images/chat-app.svg"
                        alt="app chat atypik-house"
                      />
                    </div>

                    <div v-if="conversations.length > 0" class="card chat-app">
                      <div>
                        <div id="plist" class="people-list">
                          <div class="input-group">
                            <div
                              @click="getUserMessages"
                              style="cursor: pointer"
                              class="input-group-prepend"
                            >
                              <span class="input-group-text">
                                <i class="fas fa-sync-alt"></i>
                              </span>
                            </div>
                            <label for="searchAux" style="display: none"
                              >xxxxxx</label
                            >
                            <input
                              type="text"
                              v-model="conversationSearchValueText"
                              class="form-control shadow-none"
                              placeholder="Chercher..."
                              id="searchAux"
                            />
                          </div>
                          <ul class="list-unstyled chat-list mt-2 mb-0">
                            <li
                              class="clearfix"
                              v-if="sortedConversations.length == 0"
                            >
                              <div class="about">
                                <div class="name">Aucun résultat</div>
                              </div>
                            </li>
                            <li
                              class="clearfix chatMessageCountRelative"
                              :class="
                                conversation.id == conversation_id
                                  ? 'active'
                                  : ''
                              "
                              @click="
                                getConversationMessages(conversation.id, key)
                              "
                              v-for="(conversation, key) in sortedConversations"
                              :key="key"
                            >
                              <span
                                class="chatMessageCount"
                                v-if="conversation.msgCount > 0"
                                >{{ conversation.msgCount }}</span
                              >

                              <img
                                v-if="sortedConversations[key].avatar"
                                :src="
                                  'storage/' +
                                  sortedConversations[key].avatar.path +
                                  '/' +
                                  sortedConversations[key].avatar.name
                                "
                                :alt="
                                  conversation.id +
                                  '-' +
                                  conversation.created_at
                                "
                              />
                              <img
                                v-else
                                src="../../../../../public/images/avatar.png"
                                :alt="
                                  conversation.id +
                                  '-' +
                                  conversation.created_at
                                "
                              />
                              <div class="about">
                                <div class="name">
                                  {{
                                    sortedConversations[key].userAccount
                                      .lastname
                                  }}
                                  {{
                                    sortedConversations[key].userAccount
                                      .firstname
                                  }}
                                </div>

                                <div class="status">
                                  <span class="time text-muted small">{{
                                    getDateForConversation(
                                      conversation.messages[
                                        conversation.messages.length - 1
                                      ].created_at
                                    )
                                  }}</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div class="chat">
                          <div
                            v-if="sortedConversationMessages.length > 0"
                            class="chat-header clearfix"
                          >
                            <div class="row">
                              <div class="col-lg-6 topBarChat">
                                <a
                                  style="
                                    display: flex;
                                    justify-content: start;
                                    align-items: center;
                                  "
                                  href="javascript:void(0);"
                                  data-toggle="modal"
                                  data-target="#view_info"
                                >
                                  <img
                                    v-if="
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar
                                    "
                                    :src="
                                      'storage/' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar.path +
                                      '/' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar.name
                                    "
                                    :alt="
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].id +
                                      '-' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].created_at
                                    "
                                  />
                                  {{
                                    sortedConversations[
                                      selectedUserAvatarTopBar
                                    ].userAccount.lastname
                                  }}
                                  {{
                                    sortedConversations[
                                      selectedUserAvatarTopBar
                                    ].userAccount.firstname
                                  }}
                                  <img
                                    v-if="
                                      !sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar
                                    "
                                    src="../../../../../public/images/avatar.png"
                                    :alt="
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].id +
                                      '-' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].created_at
                                    "
                                  />
                                </a>
                                <div class="chat-about">
                                  <h6
                                    v-if="
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ]
                                    "
                                    class="m-0 p-0"
                                  >
                                    {{
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].lastname
                                    }}
                                    {{
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].firstname
                                    }}
                                  </h6>
                                </div>
                              </div>
                              <div
                                style="
                                  text-align: right;
                                  display: flex;
                                  justify-content: end;
                                  align-items: center;
                                "
                                class="col-lg-6 hidden-sm text-right"
                              >
                                <small style="margin-right: 10px"
                                  >Connecté il y'a 21 minutes
                                </small>

                                <a
                                  @click="conversationMessages = []"
                                  href="javascript:void(0);"
                                  ><i class="fas fa-times"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div
                            v-if="sortedConversationMessages.length > 0"
                            style="height: 515px"
                            class="chat-history"
                          >
                            <ul class="m-b-0">
                              <li
                                v-for="(msg, key) in sortedConversationMessages"
                                :key="key"
                                class="clearfix"
                                :class="
                                  msg.sender_user_id == user.id
                                    ? 'messageOtherDiv'
                                    : ''
                                "
                              >
                                <div
                                  :class="
                                    msg.sender_user_id == user.id
                                      ? 'my-message'
                                      : 'other-message'
                                  "
                                  class="message float-left"
                                >
                                  {{ msg.content }}
                                </div>
                                <div class="message-data text-right">
                                  <img
                                    v-if="
                                    (key < sortedConversationMessages.length-1 ? sortedConversationMessages[(sortedConversationMessages.length-2)-key].sender_user_id!=sortedConversationMessages[(sortedConversationMessages.length-1)-key].sender_user_id : false )

                               &&
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar &&
                                      msg.sender_user_id != user.id
                                    "
                                    :src="
                                      'storage/' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar.path +
                                      '/' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar.name
                                    "
                                    :alt="
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].id +
                                      '-' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].created_at
                                    "
                                  />
                                  <img
                                    v-if="
                                      (key < sortedConversationMessages.length-1 ? sortedConversationMessages[(sortedConversationMessages.length-2)-key].sender_user_id!=sortedConversationMessages[(sortedConversationMessages.length-1)-key].sender_user_id : false )

                               &&
                                      !sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar &&
                                      msg.sender_user_id != user.id
                                    "
                                    src="../../../../../public/images/avatar.png"
                                    :alt="
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].id +
                                      '-' +
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].created_at
                                    "
                                  />
                                  <span class="message-data-time">
                                    {{ getDateForConversation(msg.created_at) }}
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            v-if="sortedConversationMessages.length > 0"
                            class="chat-message clearfix"
                          >
                            <div class="input-group mb-0">
                              <form
                                style="width: 100%; display: flex"
                                @submit.prevent="sendMessage()"
                              >
                                <input
                                  v-model="messageToSend.content"
                                  type="text"
                                  class="form-control shadow-none"
                                  placeholder="..."
                                />
                                <div class="input-group-prepend">
                                  <button type="submit">
                                    <span class="input-group-text"
                                      ><i class="fas fa-paper-plane"></i
                                    ></span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>

                          <div
                            style="
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 97vh;
                            "
                            v-else
                          >
                            <img
                              style="width: 40%"
                              src="../../../../../public/images/chat-app.svg"
                              alt="atypik house chat app"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--
            <div class="chatAppDiv">
              <div class="container">
                <div class="row no-gutters">
                  <div class="col-md-4 border-right p-1">
                    <div class="topLeftChatAppDiv">
                      <div class="settings-tray">
                        <span class="settings-tray--right">
                          <i
                            @click="getUserMessages"
                            class="fas fa-sync-alt"
                          ></i>
                        </span>
                      </div>

                      <div
                        v-if="
                          conversations.length > 0 &&
                          usersByConversationArray.length > 0
                        "
                      >
                        <div
                          :class="
                            conversation.id == conversation_id
                              ? 'selectedConversation'
                              : ''
                          "
                          @click="getConversationMessages(conversation.id, key)"
                          v-for="(conversation, key) in sortedConversations"
                          :key="key"
                          class="friend-drawer friend-drawer--onhover"
                        >
                                                 <span class="chatMessageCount" v-if="conversation.msgCount>0" >{{conversation.msgCount}}</span>

                          <img
                            v-if="usersByConversationArray[key]"
                            :src="
                              'storage/' +
                              usersByConversationArray[key].user_avatar.path +
                              '/' +
                              usersByConversationArray[key].user_avatar.name
                            "
                            class="profile-image"
                            alt=""
                          />
                          <img
                            v-else
                            style="width: 60px"
                            src="../../../../../public/images/avatar.png"
                            alt=""
                          />
                          <div
                            v-if="usersByConversationArray[key]"
                            class="text"
                          >
                            <h6>
                              {{ usersByConversationArray[key].lastname }}
                              {{ usersByConversationArray[key].firstname }}
                            </h6>
                            <p class="text-muted">
                              {{
                                getMessagePreview(
                                  conversation.messages[
                                    conversation.messages.length - 1
                                  ].content
                                )
                              }}
                            </p>
                          </div>
                          <span class="time text-muted small">{{
                            getDateForConversation(
                              conversation.messages[
                                conversation.messages.length - 1
                              ].created_at
                            )
                          }}</span>

                          <span
                            style="margin-left: 12px"
                            v-if="conversation.readState == true"
                            class="red statusRed"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="sortedConversationMessages.length > 0"
                    class="col-md-8 p-1"
                  >
                    <div
                      style="background-color: #eeeeee"
                      class="topRightChatAppDiv"
                    >
                      <div class="settings-tray">
                        <div
                          class="friend-drawer no-gutters friend-drawer--grey"
                        >
                          <img
                            v-if="
                              usersByConversationArray[selectedUserAvatarTopBar]
                            "
                            class="profile-image"
                            :src="
                              'storage/' +
                              usersByConversationArray[selectedUserAvatarTopBar]
                                .user_avatar.path +
                              '/' +
                              usersByConversationArray[selectedUserAvatarTopBar]
                                .user_avatar.name
                            "
                            alt=""
                          />

                          <img
                            v-if="
                              !usersByConversationArray[
                                selectedUserAvatarTopBar
                              ] && conversation_id != 0
                            "
                            style="width: 60px"
                            src="../../../../../public/images/avatar.png"
                            alt=""
                          />
                          <div class="text">
                            <h6
                              v-if="
                                usersByConversationArray[
                                  selectedUserAvatarTopBar
                                ]
                              "
                            >
                              {{
                                usersByConversationArray[
                                  selectedUserAvatarTopBar
                                ].lastname
                              }}
                              {{
                                usersByConversationArray[
                                  selectedUserAvatarTopBar
                                ].firstname
                              }}
                              <br />
                              {{
                                usersByConversationArray[
                                  selectedUserAvatarTopBar
                                ].email
                              }}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="chat-panel">
                        <div class="messagesDiv">
                          <div
                            v-for="(msg, key) in sortedConversationMessages"
                            :key="key"
                            :class="
                              msg.sender_user_id == user.id
                                ? 'rightMessageDiv'
                                : 'leftMessageDiv'
                            "
                            class="row no-gutters"
                          >
                            <div class="col-md-3">
                              <div
                                class="chat-bubble"
                                :class="
                                  msg.sender_user_id == user.id
                                    ? 'rightMessage'
                                    : 'leftMessage'
                                "
                              >
                                {{ msg.content }}
                              </div>
                              {{ getDateForConversation(msg.created_at) }}
                            </div>
                          </div>



                        </div>

                        <div class="row">
                          <div class="col-12">
                            <div class="chat-box-tray">
                              <form
                                style="width: 100%"
                                @submit.prevent="sendMessage()"
                              >
                                <input
                                  v-model="messageToSend.content"
                                  type="text"
                                  placeholder="..."
                                />

                                <button type="submit">
                                  <i class="fas fa-paper-plane sendIconChatApp">
                                  </i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            </div>

            <!-- Notifications -->
            <div v-if="windowStep == 3" class="NotificationsdStep">
              <h1>Notifications</h1>
              <div
                v-if="notifications.length > 0"
                class="rowNotification notification-container"
              >
                <p class="dismiss text-right">
                  <a
                    >Vous avez {{ newNotificationsCheckCount }} nouvelle(s)
                    notification(s)
                  </a>
                </p>
                <div
                  v-for="(notification, key) in notifications"
                  :key="key"
                  class="card notification-card"
                  :class="
                    !notification.read_at
                      ? 'cardReadStateTrue'
                      : 'cardReadStateFalse'
                  "
                >
                  <div class="card-body">
                    <table>
                      <tr>
                        <td style="width: 100%">
                          <div class="card-title">
                            <img
                              class="avatarNotification"
                              :src="
                                '/storage/' +
                                notification.avatar.path +
                                '/' +
                                notification.avatar.name
                              "
                              :alt="
                                notification.id + '-' + notification.created_at
                              "
                            />

                            <div>
                              <b
                                >{{ notification.from_users[0].lastname }}
                                {{ notification.from_users[0].firstname }}</b
                              ><br />
                              {{ notification.content }}<br />
                              <span>{{ notification.created_at }}</span>
                            </div>

                            <div v-if="!notification.read_at">
                              <i
                                class="
                                  fas
                                  fa-exclamation-circle
                                  notificationDashboardDesign
                                "
                                :class="
                                  !notification.read_at
                                    ? 'notificationDashboardReadingStateFalse'
                                    : ''
                                "
                              ></i>
                            </div>
                          </div>
                        </td>
                        <td
                          style="
                            width: 10%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          "
                        >
                          <a
                            aria-label="first link"
                            class="dismiss-notification"
                            @click="deleteNotification(notification.id)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>

                          <router-link
                            aria-label="second link"
                            :to="notification.link"
                          >
                            <a class="link-notification">
                              <i class="fas fa-link"></i>
                            </a>
                          </router-link>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  height: 600px;
                "
                v-else
              >
                <h3>0 Notifications</h3>
                <img
                  style="width: 30%"
                  src="../../../../../public/images/noNotification.svg"
                  alt="Aucun record"
                />
              </div>
            </div>

            <div v-if="windowStep == 5" class="historiquesStep">
              <h1 style="display: none">Historique réservations</h1>
              <div class="topBarAnnoncesFilter">
                <div class="filtersDiv">
                  <ul class="ulTopSideBar">
                    <li>
                      <div class="form-search">
                        <label for="search" style="display: none"
                          >xxxxxxxxxx</label
                        >

                        <input
                          v-model="reservationSearchTextValue"
                          type="search"
                          name="search"
                          placeholder="Filtrer par titre"
                          id="search"
                        />
                      </div>
                    </li>
                    <li>
                      <label for="sortFilterStatus">Status : </label>
                      <select
                        v-on:change="reservationStatusValueChanged()"
                        v-model="reservationStatusValue"
                        class="selectSortBy"
                        name="sortFilter"
                        id="sortFilterStatus"
                      >
                        <option selected value="">Tout</option>
                        <option
                          v-for="(status, key) in reservationStats"
                          :key="key"
                          :value="status"
                        >
                          {{ status }}
                        </option>
                      </select>
                    </li>
                    <li>
                      <label for="sortFilter">Trier par :</label>
                      <select
                        v-model="sortReservationValue"
                        class="selectSortBy"
                        name="sortFilter"
                        id="sortFilter"
                      >
                        <option value="priceAsc">
                          Montant : Ordre croissant
                        </option>
                        <option value="priceDesc">
                          Montant : Ordre décroissant
                        </option>

                        <option value="news" selected>Récents</option>
                        <option value="anciens" selected>Anciens</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="historiquesStepContainer">
                <div class="row">
                  <div
                    style="
                      margin-bottom: 50px;
                      justify-content: center;
                      display: flex;
                    "
                    :style="sortedReservations.length==1 ? 'width:100%;' : '' "
                    v-for="(reservation, key) in sortedReservations"
                    :key="key"
                    class="col-xl-6 col-md-6 col-sm-12"
                  >
                    <div class="historiquesStepCard">
                      <div v-if="reservation.images" class="box-1">
                        <img
                          style="height: 100%"
                          :src="
                            '/storage/' +
                            reservation.images[0].path +
                            '/' +
                            reservation.images[0].image
                          "
                          :alt="reservation.id + '-' + reservation.created_at"
                        />
                        <div class="green"></div>
                      </div>
                      <div class="box-2">
                        <div
                          v-if="reservation.reservationState == 'Prochainement'"
                          :class="
                            reservation.reservationState == 'Prochainement'
                              ? 'reservationStateDivBlue'
                              : '' && reservation.bookState == 'En cours'
                              ? 'reservationStateDivGreen'
                              : '' && reservation.bookState == 'Annulée'
                              ? 'reservationStateDivDisplayNone'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <div
                          v-if="reservation.reservationState == 'En cours'"
                          :class="
                            reservation.reservationState == 'En cours'
                              ? 'reservationStateDivGreen'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <div
                          v-if="reservation.reservationState == 'Annulée'"
                          :class="
                            reservation.reservationState == 'Annulée'
                              ? 'reservationStateDivDisplayNone'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <div
                          v-if="reservation.reservationState == 'Passée'"
                          :class="
                            reservation.reservationState == 'Passée'
                              ? 'reservationStateDivPassed'
                              : ''
                          "
                          class="reservationStateDiv"
                        >
                          {{ reservation.reservationState }}
                        </div>

                        <h3>
                          {{ reservation.annonce.title }} <br />
                          #ATK0003429
                        </h3>
                        <p>
                          Date d'arrivé : {{ reverseDate(reservation.checkIn) }}
                        </p>
                        <br />
                        <p>
                          Date de départ :
                          {{ reverseDate(reservation.checkOut) }}
                        </p>
                        <br />

                        <p>Nombre de nuits : {{ reservation.nightCount }}</p>

                        <br />
                        <p>Payée : € {{ reservation.amount }}</p>
                        <br />
                        <p>Date de réservation :{{ reservation.created_at }}</p>
                        <br />
                        <p>{{ reservation.annonce.city }}</p>

                        <br />
                        <div class="shop"></div>
                        <div
                          v-if="reservation.bookState == 'Annulée'"
                          class="canceledReservation"
                        >
                          Réservation annulée
                        </div>
                        <div
                          v-if="reservation.bookState == 'Annulée'"
                          class="canceledReservation"
                        >
                          Le {{ reservation.updated_at }}
                        </div>
                        <div
                          style="text-align: end"
                          v-if="reservation.bookState == 'Annulée'"
                        >
                          <i
                            style="
                              color: lightgrey;
                              font-size: 20px;
                              cursor: pointer;
                            "
                            class="fas fa-trash"
                            @click="deleteReservation(reservation.id)"
                          ></i>
                        </div>

                        <div
                          v-if="
                            reservation.reservationState != 'Annulée' &&
                            reservation.reservationState != 'En cours' &&
                            reservation.reservationState != 'Passée'
                          "
                          class="card-foot"
                        >
                          <button
                            @click="cancelReservation(reservation.id)"
                            class="btn btn-danger"
                          >
                            Annuler
                          </button>
                        </div>

                        <div
                          v-if="
                            reservation.reservationState != 'Annulée' &&
                            (reservation.reservationState == 'En cours' ||
                              reservation.reservationState == 'Passée')
                          "
                          class="card-foot"
                        >
                          <button
                            @click="choseWhichAnnonce(reservation.annonce.id)"
                            data-bs-toggle="modal"
                            data-bs-target="#commentReservationModal"
                            class="btn btnCommenter"
                          >
                            Commenter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--
                <div class="tableReservation">
                <h2 class="heading">#Réservation ID</h2>
                <div class="block">
                <p>Titre de l'annonce
                    <span class="price">$128/
                    <sub>nuit</sub>
                    </span>
                    <ul class="options">
                    <li>Date d'arrivé :</li>
                    <li>Date de départ :</li>
                    <li>Date de nuit(s) :</li>
                    <li>Nombre de personnes : </li>
                    </ul>
                </p>
                </div>
                <div class="block">
                <p>Paiement
                    <ul class="options">
                    <li>Mode de paiement : </li>
                    <li>Date de paiement :</li>
                    </ul>
                </p>
                </div>
                <div class="block">
                <img style="margin-bottom:20px" src="https://www.leboisderosoy.com/wp-content/uploads/2019/06/7CMl5fvE-scaled.jpeg" alt="" srcset="">
                </div>
                <button class="btn">
                <p>Total : 999$</p>
                </button>
                </div> -->
              <!-- card div end -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="commentReservationModal"
      tabindex="-1"
      aria-labelledby="commentReservationModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> -->
          <div class="modal-body">
            <div class="comments">
              <h2>Commenter votre séjour</h2>

              <div class="comments-form">
                <form @submit.prevent="handleSubmit">
                  <ul>
                    <li>
                      <textarea
                        placeholder="Comment"
                        v-model="comment.content"
                        required
                      ></textarea>
                    </li>
                    <li class="footreCommentModal">
                      <div
                        style="
                          display: flex;
                          justify-content: center;
                          margin: 35px 0;
                        "
                      >
                        <star-rating
                          v-bind:increment="0.5"
                          v-bind:max-rating="5"
                          inactive-color="#000"
                          active-color="#FFE000"
                          v-bind:star-size="30"
                          @update:rating="setRating"
                          v-model:ratingCount="rating"
                        ></star-rating>
                      </div>

                      <div style="display: flex; justify-content: space-around">
                        <button
                          data-bs-dismiss="modal"
                          class="btn closeButton shadow-none"
                        >
                          Fermer
                        </button>
                        <button
                          @click="addAnnonceComment"
                          class="btn postButton shadow-none"
                        >
                          Poster
                        </button>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import $ from "jquery";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import loadingPage from "../loadingPage/loadingPage.vue";
// import { defineComponent } from "vue";
// import vue3starRatings from "vue3-star-ratings";

import StarRating from "vue-star-rating";

export default {
  components: {
    loadingPage,
    StarRating,
  },
  data() {
    const format = (x) => {
      let ch = "";

      let day = x.getDate();
      let month = x.getMonth() + 1;
      const year = x.getFullYear();

      if (month < 10) {
        month = `0${month}`;
      }

      if (day < 10) {
        day = `0${day}`;
      }

      ch = `${day}/${month}/${year}`;

      return ch;
    };
    return {
      loading: true,

      format: "",
      userRole: "",
      windowStep: 1,

      messages: [],
      user: {
        id: "",
        token: "",
      },

      messagesStep: 1,

      sentMessageCount: 0,
      receivedMessageCount: 0,

      notifications: [],
      notificationsAvatars: [],
      from_users: [],

      newNotificationsCheck: false,
      newMessageCheckArray: [],
      newNotificationsCheckCount: 0,
      newMessageCheck: false,
      newMessageCheckPrimary: false,

      reservations: [],

      conversations: [],
      conversation_id: 0,
      conversationMessages: [],
      usersByConversationArray: [],

      usersArray: [],

      selectedUserAvatarTopBar: 0,
      messageToSend: {
        content: "",
        sender_user_id: "",
        receiver_user_id: "",
      },

      msgCount: 0,
      conversationSearchValue: "",
      conversationSearchValueText: "",

      reservationStats: [],
      reservationSearchTextValue: "",
      sortReservationValue: "news",
      reservationStatusValue: "",

      //commentssss heree ,
      comment: {
        content: "",
        user_id: "",
        annonce_id: 0,
        rating: 0,
      },

      ratingCount: 0,

      whichAnnonce: 0,


      //dashboard
      reservationCount:0,
      totalAmount:0,
      totalNightsCount:0,
      lastThreeReservations :[],

      threeLastVisits:[],
    };
  },

  computed: {
    sortedConversationMessages: function () {
      function compare(a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      }

      return this.conversationMessages.sort(compare);
    },

    sortedConversations: function () {
      function compare(a, b) {
        if (a.messages[a.messages.length-1].id > b.messages[b.messages.length-1].id ) return 1;
        if (a.messages[a.messages.length-1].id  < b.messages[b.messages.length-1].id ) return -1;
        return 0;
      }

      return this.conversations
        .filter((item) => {
          return item.userAccount.lastname.includes(
            this.conversationSearchValue
          );
        })
        .sort(compare);
    },

    sortedReservations: function () {
      if (this.sortReservationValue == "news") {
        return this.reservations
          .sort((a, b) => {
            return a.id < b.id;
          })
          .filter((item, index) => {
            return (
              item.annonce.title.includes(this.reservationSearchTextValue) &&
              item.bookState.includes(this.reservationStatusValue)
            );
          });
      } else if (this.sortReservationValue == "anciens") {
        return this.reservations
          .sort((a, b) => {
            return a.id > b.id;
          })
          .filter((item, index) => {
            return (
              item.annonce.title.includes(this.reservationSearchTextValue) &&
              item.bookState.includes(this.reservationStatusValue)
            );
          });
      } else if (this.sortReservationValue == "priceAsc") {
        return this.reservations
          .sort((a, b) => {
            return a.amount > b.amount;
          })
          .filter((item, index) => {
            return (
              item.annonce.title.includes(this.reservationSearchTextValue) &&
              item.bookState.includes(this.reservationStatusValue)
            );
          });
      } else if (this.sortReservationValue == "priceDesc") {
        return this.reservations
          .sort((a, b) => {
            return a.amount < b.amount;
          })
          .filter((item, index) => {
            return (
              item.annonce.title.includes(this.reservationSearchTextValue) &&
              item.bookState.includes(this.reservationStatusValue)
            );
          });
      } else {
        return this.reservations.filter((item, index) => {
          return item.bookState.includes(this.reservationStatusValue);
        });
      }
    },
  },

  mounted() {
    this.scrollToTop();
    if (localStorage.getItem("windowStep") != "") {
      this.windowStep = localStorage.getItem("windowStep");
    }
    this.userRole = localStorage.getItem("userRole");
    this.user.id = localStorage.getItem("userId");
    this.user.token = localStorage.getItem("token");

    if (localStorage.getItem("token") != "") {
      this.loggedIn = true;
    } else if (
      this.userRole == "owner" ||
      this.userRole == "admin" ||
      this.userRole == "moderateur" ||
      localStorage.getItem("token") == ""
    ) {
      this.loggedIn = false;

      this.$router.push({ path: "/" });
    }

    this.getUserMessages();

    this.getUserNotifications();

    if (this.windowStep == 3) {
      this.changeNotificationReadingState();
    }
    this.getReservationByUser();

    this.intervalid1 = setInterval(
      function () {
        if (this.windowStep == 2) {
          this.getUserMessages();
        }
      }.bind(this),
      100000
    );

    this.getAnnonceThreeLastVisitForUser();
  },

  methods: {

      getAnnonceThreeLastVisitForUser(){
      this.threeLastVisits=[];
      let req={
          user_id:localStorage.getItem('userId'),
      }

      axios.post('api/getAnnonceThreeLastVisitForUser' , req).then((response) => {
          response.data.lastThreeAnnones.forEach(element => {
              this.threeLastVisits.push(element);
          });

          console.log('yeeessss :   ffdfdf :f df d f df df :   fdf df :  , this. ' , this.threeLastVisits[0].title)

      })

      },

    choseWhichAnnonce(x) {
      this.whichAnnonce = x;
    },

    addAnnonceComment() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      this.comment.user_id = localStorage.getItem("userId");
      this.comment.annonce_id = this.whichAnnonce;
      this.comment.rating = this.ratingCount;

      if (this.comment.rating != 0) {
        axios.post("api/addComment", this.comment, config).then((response) => {
          $("#commentReservationModal").hide();
          $("body").removeClass("modal-open");
          $("body").css({ overflow: "auto" });
          $(".modal-backdrop").remove();

          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Commentaire envoyé avec succés ",
            showConfirmButton: false,
            timer: 2500,
          });

          this.comment = {
            content: "",
            user_id: "",
            annonce_id: 0,
            rating: 0,
          };
          this.ratingCount=0;
        });
      }

    },

    setRating(rating) {
      this.ratingCount = rating;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    reservationStatusValueChanged() {
      this.reservationStatusValue = this.reservationStatusValue;
    },

    getDateForConversation(date) {
      let dateAux = moment(date, "DD-MM-YYYY hh:mm:ss").format("DD/MM/YYYY");

      let today = new Date();
      let ch = `${today.getDate()<10? "0"+today.getDate() : today.getDate()}/${
        today.getMonth() + 1 < 10 ? "0"+(today.getMonth()+1) : today.getMonth() + 1
      }/${today.getFullYear()}`;

      if (ch == dateAux) {
        return moment(date, "DD-MM-YYYY hh:mm:ss").format("hh:mm");
      } else {
        return moment(date, "DD-MM-YYYY hh:mm:ss").format("DD-MM-YYYY");
      }
    },
    getMessagePreview(msg) {
      let aux = "";
      let l = 20;

      if (msg.length > l) {
        for (let i = 0; i < l; i++) {
          aux += msg[i];
        }

        aux += "...";

        return aux;
      } else {
        return msg;
      }
    },
    changeMessageReadingState(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      let req = {
        conversation_id: this.conversation_id,
        userId: this.user.id,
      };

      axios
        .post("api/changeMessageReadingState", req, config)
        .then((result) => {})
        .catch((err) => {});
    },

    getConversationMessages(id, key) {
      this.conversationMessages = [];

      this.selectedUserAvatarTopBar = key;
      this.conversation_id = id;

      this.newMessageCheckPrimary = false;

      this.changeMessageReadingState(id);
      //   this.getUserMessages();

      this.conversations.forEach((element) => {
        if (element.id == id) {
          element.messages.forEach((msg) => {
            this.conversationMessages.push(msg);
          });
        }
      });
    },

    deleteReservation(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      Swal.fire({
        title: "Voulez-vous vraiment supprimer définitivement la réservation?",
        showDenyButton: false,
        confirmButtonColor: "rgb(255, 0, 0)",
        confirmButtonText: "D'accord",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonClass: " px-4 py-2 rounded-pill ",

        customClass: { popup: "swal2-border-radius" },
        showCancelButton: true,
        confirmButtonText: "Oui ",
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete("/api/deleteReservation/" + id, config)
            .then((result) => {
              this.getReservationByUser();
            });
        }
      });
    },
    cancelReservation(id) {
      Swal.fire({
        title: "Voulez-vous vraiment annuler la réservation?",
        showDenyButton: false,
        confirmButtonColor: "rgb(255, 0, 0)",
        confirmButtonText: "D'accord",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonClass: " px-4 py-2 rounded-pill ",

        customClass: { popup: "swal2-border-radius" },
        showCancelButton: true,
        confirmButtonText: "Annuler la réservation",
        denyButtonText: `Fermer`,
      }).then((result) => {
        if (result.isConfirmed) {
          let config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };

          let req = {
            bookState: "Annulée",
            reservation_id: id,
          };

          axios.post("/api/cancelReservation", req, config).then((result) => {
            this.getReservationByUser();
          });

          Swal.fire({
            title: "Réservation annulée",
            showDenyButton: false,
            showCancelButton: false,
            icon: "success",

            confirmButtonColor: "black",
            confirmButtonText: "D'accord",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    reverseDate(chDate) {
      let x = "";

      for (let i = 8; i < chDate.length; i++) {
        x += chDate[i];
      }

      x += "/";

      for (let i = 5; i <= 6; i++) {
        x += chDate[i];
      }

      x += "/";

      for (let i = 0; i < 4; i++) {
        x += chDate[i];
      }

      ////
      return x;
    },

    getReservationByUser() {
      this.reservations = [];
      this.reservationStats = [];
            this.lastThreeReservations =[];

      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let req = {
        user_id: localStorage.getItem("userId"),
      };

      axios
        .post("/api/getReservationByUser", req, config)
        .then((response) => {
            this.reservationCount=response.data.reservationCount;
            this.totalAmount=response.data.totalAmount;
            this.totalNightsCount=response.data.totalNightsCount;

        response.data.lastThreeReservations.forEach((element) => {
            this.lastThreeReservations.push(element);
          });


          response.data.reservationStats.forEach((element) => {
            this.reservationStats.push(element.bookState);
          });

          response.data.reservations.forEach((element) => {
            this.reservations.push(element);
          });

          this.reservations.forEach((element) => {
            let foundCheck = false;

            if (element.bookState != "Annulée") {
              element.datesRange = this.getDatesBetween(
                element.checkIn,
                element.checkOut,
                false
              );

              element.datesRange.forEach((col) => {
                let dateAux =
                  new Date().getFullYear() +
                  "-" +
                  ("0" + (new Date().getMonth() + 1)).slice(-2) +
                  "-" +
                  ("0" + new Date().getDate()).slice(-2);

                dateAux = dateAux.replace("-", "/");
                dateAux = dateAux.replace("-", "/");
                dateAux = dateAux.replace("-", "/");

                if (col == dateAux || col == dateAux) {
                  element.reservationState = "En cours";
                  foundCheck = true;
                  this.updateBookStateReservation(element.id, "En cours");
                } else if (col < dateAux && !foundCheck) {
                  element.reservationState = "Passée";
                  element.bookState = "Passée";

                  foundCheck = true;
                  this.updateBookStateReservation(element.id, "Passée");
                } else if (col > dateAux && !foundCheck) {
                  element.reservationState = "Prochainement";
                  element.bookState = "Prochainement";
                  foundCheck = true;
                  this.updateBookStateReservation(element.id, "Prochainement");
                }
              });
            } else {
              element.reservationState = "Annulée";

              element.bookState = "Annulée";
            }

            this.loading = false;
          });

        })
        .catch((err) => {});
    },

    updateBookStateReservation(id, ch) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let req = {
        reservation_id: id,
        bookState: ch,
      };

      axios
        .post("/api/updateBookStateReservation", req, config)
        .then((result) => {});
    },
    getDatesBetween(x, y, state) {
      let datesArray = [];
      x = new Date(x);
      y = new Date(y);

      let currentDate = new Date(x.getFullYear(), x.getMonth(), x.getDate());

      while (currentDate <= y) {
        var currentDateAux = currentDate.getFullYear() + "/";

        if (currentDate.getMonth() + 1 < 10) {
          currentDateAux += "0" + (currentDate.getMonth() + 1) + "/";
        } else {
          currentDateAux += currentDate.getMonth() + 1 + "/";
        }

        if (currentDate.getDate() < 10) {
          currentDateAux += "0" + currentDate.getDate() + "";
        } else {
          currentDateAux += currentDate.getDate() + "";
        }

        datesArray.push(currentDateAux);

        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1 // Will increase month if over range
        );
      }

      return datesArray;
    },
    deleteNotificationAux(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };


      axios.delete("api/deleteNotification/" + id, config).then((result) => {
        this.getUserNotifications();
      });
    },

    deleteNotification(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer cette notification ?",

        text: "Cette action ne peut pas être annulée.",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "rgb(255, 0, 0)",
        denyButtonColor: "#272a2c",

        confirmButtonText: "Supprimer",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteNotificationAux(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Notification à été bien suprimée",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    changeNotificationReadingState() {

      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let aux = {
        id: localStorage.getItem("userId"),
      };

      axios
        .post("api/changeNotificationReadAt", aux, config)
        .then((response) => {})
        .catch((err) => {});
    },

    getUserNotifications() {
      this.notifications = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.user.id = localStorage.getItem("userId");

      axios
        .post("/api/getUserNotifications", this.user, config)
        .then((response) => {
          if (response.data.notifications.length > 0) {
            response.data.notifications.forEach((element) => {
              response.data.avatars.forEach((elAux) => {
                if (elAux.user_id == element.from_id) {
                  element.avatar = elAux;
                }
              });

              this.notifications.push(element);
              if (element.read_at == null) {
                this.newNotificationsCheckCount++;
                this.newNotificationsCheck = true;
              }
            });
          }

          if (response.data.from_users.length > 0) {
            response.data.from_users.forEach((element, key) => {
              this.notifications[key].from_users = element;
            });
          }
        });
    },

    getUserMessages() {
      this.loading = true;
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      this.conversationSearchValue = "";

      this.messages = [];

      this.usersArray = [];
      this.usersByConversationArray = [];
      this.conversations = [];
      axios.post("api/getUserMessages", this.user, config).then((response) => {
        response.data.conversations.forEach((element) => {
          this.messages.push(element.messages);
          this.conversations.push(element);
        });

        if (this.conversation_id != 0)
          this.getConversationMessages(
            this.conversation_id,
            this.selectedUserAvatarTopBar
          );
        this.msgCount = 0;

        this.sortedConversations.forEach((element) => {
          this.msgCount = 0;

          this.newMessageCheck = false;

          element.messages.forEach((msg) => {
            if (
              msg.receiver_user_id == this.user.id &&
              msg.readingState == "0"
            ) {
              this.msgCount++;

              this.newMessageCheck = true;
              this.newMessageCheckPrimary = true;
            }

            if (msg.sender_user_id != this.user.id) {
              let exist = false;
              this.usersArray.forEach((user) => {
                if (user == msg.sender_user_id) {
                  exist = true;
                }
              });

              if (!exist) {
                this.usersArray.push(msg.sender_user_id);
              }
            }

            if (msg.receiver_user_id != this.user.id) {
              let exist = false;
              this.usersArray.forEach((user) => {
                if (user == msg.receiver_user_id) {
                  exist = true;
                }
              });

              if (!exist) {
                this.usersArray.push(msg.receiver_user_id);
              }
            }
          });
          element.msgCount = this.msgCount++;

          element.readState = this.newMessageCheck;
        });

        this.usersArray.forEach((el) => {
          let req = {
            id: el,
          };
          axios.post("api/getUser/", req).then((result) => {
            result.data.users.forEach((x) => {
              this.usersByConversationArray.push(x);
            });
          });
          this.loading = false;
        });
      });
    },
    windowStepFunction(x) {
      this.windowStep = x;
      localStorage.setItem("windowStep", x);
      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }
      //   if (x == 2) {
      //     this.changeMessageReadingState();
      //   }
      if (x == 3) {
        this.changeNotificationReadingState();
      }
    },

    commentReservation(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      let req = {
        annonce_id: annonce_id,
        user_id: this.user.id,
        content: comment,
        reservation_id: id,
      };

      axios.post("/api/sendComment", req, config).then((result) => {});
    },

    sendMessage() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      let aux = this.messageToSend.content;
      this.messageToSend = {
        sender_user_id: localStorage.getItem("userId"),
        receiver_user_id:
          this.sortedConversations[this.selectedUserAvatarTopBar].userAccount
            .id,
        content: aux,
        from_name:
          localStorage.getItem("lastname") +
          " " +
          localStorage.getItem("firstname"),
        to_name:
          this.sortedConversations[this.selectedUserAvatarTopBar].userAccount
            .lastname +
          " " +
          this.sortedConversations[this.selectedUserAvatarTopBar].userAccount
            .firstname,
      };
      if (aux.length > 0) {

        axios
          .post("api/sendMessage", this.messageToSend, config)
          .then((response) => {
            this.messageToSend.content = "";
            // this.selectedUserAvatarTopBar = 0;
            this.getUserMessages();
          });
      }
    },
  },
};
</script>


<style lang="scss">

.dashboardStep{
    padding: 0 30px;

    .lastSeenAnnonces{
        h1{
        text-align: start;
    }
    }

.lastReservationsDiv{
    h1{
        text-align: start;
    }

}

    .c-dashboardInfo {
  margin-bottom: 15px;
}
.c-dashboardInfo .wrap {
  background: #ffffff;
  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 25px 20px;
  height: 100%;
}
.c-dashboardInfo__title,
.c-dashboardInfo__subInfo {
  color: #6c6c6c;
  font-size: 1.18em;
}
.c-dashboardInfo span {
  display: block;
}
.c-dashboardInfo__count {
  font-weight: 600;
  font-size: 2.5em;
  line-height: 64px;
  color: #323c43;
}
.c-dashboardInfo .wrap:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  content: "";
}

.c-dashboardInfo:nth-child(1) .wrap:after {
  background: linear-gradient(82.59deg, #0f87ca 0%, #2591cc 100%);
}
.c-dashboardInfo:nth-child(2) .wrap:after {
  background: linear-gradient(81.67deg, #0f87ca 0%, #2591cc 100%);
}
.c-dashboardInfo:nth-child(3) .wrap:after {
  background: linear-gradient(69.83deg, #0f87ca 0%, #2591cc 100%);
}
.c-dashboardInfo:nth-child(4) .wrap:after {
  background: linear-gradient(81.67deg, #0f87ca 0%, #2591cc 100%);
}


}
.chatAppDiv {
  $blue: #74b9ff;

  .messagesDiv {
    height: 65vh;
    width: 100%;
    background-color: white;
    padding: 20px;
    overflow-y: scroll;
    overscroll-behavior-y: contain;
    scroll-snap-type: y proximity;
    overflow-x: hidden;
    display: flex;
    flex-direction: column-reverse;
  }

  messagesDiv:last-child {
    scroll-snap-align: start;
  }

  .topLeftChatAppDiv {
    background: #fcfdff;

    height: 100%;
    overflow-y: auto;
  }

  .container {
    background: #fcfdff;
    padding: 0;
    border-radius: 7px;
    margin-top: 10px;
    width: 98%;
    margin: 0;
    padding-left: 40px;
  }

  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 40px;
  }

  .settings-tray {
    background: #fcfdff;
    padding: 10px 15px;
    border-radius: 7px;

    .no-gutters {
      padding: 0;
    }

    &--right {
      i {
        margin-top: 10px;
        font-size: 25px;
        color: grey;
        margin-left: 14px;
        transition: 0.3s;

        &:hover {
          color: $blue;
          cursor: pointer;
        }
      }
    }
  }

  input {
    border-radius: 3px;
    width: 90%;
    // box-shadow: 6px 6px 21px 0px #ffffff21;
    padding: 30px 20px;

    &::placeholder {
      color: #e3e3e3;
      font-weight: 300;
      margin-left: 20px;
    }

    &:focus {
      outline: none;
    }
  }

  .friend-drawer {
    position: relative;

    padding: 10px 15px;
    display: flex;
    vertical-align: baseline;
    background: #ffffff;

    transition: 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &--grey {
      background: #fcfdff;
    }

    .text {
      margin-left: 12px;
      width: 70%;

      h6 {
        margin-top: 6px;
        margin-bottom: 0;
      }

      p {
        margin: 0;
      }
    }

    .time {
      color: grey;
    }

    &--onhover:hover {
      background: rgb(243, 243, 243);
      cursor: pointer;

      p,
      h6,
      .time {
        color: rgb(0, 0, 0) !important;
      }
    }
  }

  .selectedConversation {
    background: #edeef1;
    p,
    h6,
    .time {
      color: rgb(0, 0, 0) !important;
    }
  }

  .chat-bubble {
    padding: 10px 14px;
    margin: 10px 30px;
    border-radius: 9px;
    position: relative;
    animation: fadeIn 1s ease-in;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-bottom: 0;
      margin-top: -10px;
    }

    &--left {
      &:after {
        left: 0;
        border-right-color: #eee;
        border-left: 0;
        margin-left: -20px;
      }
    }

    &--right {
      &:after {
        right: 0;
        border-left-color: $blue;
        border-right: 0;
        margin-right: -20px;
      }
    }
  }

  .leftMessage {
    background-color: #eee;
    border-left: 0;
    margin-left: -20px;
    word-break: break-all;
  }

  .rightMessage {
    background-color: $blue;
    border-right: 0;
    margin-right: -20px;
    color: white;
    word-break: break-all;
  }

  .rightMessageDiv {
    display: flex;
    justify-content: flex-end;
  }

  .leftMessageDiv {
    display: flex;
    justify-content: flex-start;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .offset-md-9 {
    .chat-bubble {
      background: $blue;
      color: #fff;
    }
  }

  .chat-box-tray {
    background: rgb(255, 255, 255);
    display: flex;
    align-items: baseline;
    padding: 10px 10px;
    align-items: center;

    bottom: 0;

    input {
    }

    i {
      margin-left: 25px;
    }
  }
}

.rowNotification {
  margin: auto;
  padding: 30px;
  width: 80%;
  display: flex;
  flex-flow: column;
  max-height: 80vh;
  overflow-y: auto;
  .card {
    width: 100%;
    margin-bottom: 5px;
    display: block;
    transition: opacity 0.3s;
  }
}

.card-body {
  padding: 0.5rem;
  table {
    width: 100%;
    tr {
      display: flex;
      td {
        a.btn {
          font-size: 0.8rem;
          padding: 3px;
        }
      }
      td:nth-child(2) {
        text-align: right;
        justify-content: space-around;
      }
    }
  }
}

.card-title {
  display: flex;
  justify-content: start;
  align-items: center;
}

.notificationDashboardDesign {
  margin-left: 10px;
  font-size: 22px;
}

.notificationDashboardReadingStateFalse {
  color: #56aaee;
}

.card.display-none {
  display: none;
  transition: opacity 2s;
}

p {
  text-align: left;
  color: #272625;
  font-weight: 600;
  font-size: 15px;

  display: contents;
}

.messagesStep {
  #messagesStepContainer {
    width: 100%;
    height: 700px;
    background: #f8f8f8;
    margin: 0 auto;
    font-size: 0;
    border-radius: 5px;
    overflow: hidden;
  }
  aside {
    width: 25%;
    height: 700px;
    background-color: #f8f8f8;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
  }
  main {
    width: 75%;
    height: 660px;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
  }

  aside ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    overflow-y: scroll;
    height: 690px;
  }
  aside li {
    padding: 14px 0;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f3f3f3;
    color: black;
    padding-left: 7vw;
  }
  aside li:hover {
    background-color: #ececec;
    cursor: pointer;
  }
  h2 {
    margin: 0;
  }
  aside li i {
    font-size: 20px;
    margin-right: 10px;
  }
  aside li div {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
  }
  aside li h2 {
    color: rgb(34, 32, 32);
    font-weight: normal;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;
  }
  aside li h3 {
    font-size: 12px;
    color: #0030be;
    font-weight: normal;
  }

  .status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 7px;
  }
  .green {
    background-color: #58b666;
  }

  main header {
    height: 110px;
    padding: 30px 20px 30px 40px;
  }
  main header > * {
    display: inline-block;
    vertical-align: top;
  }
  main header img:first-child {
    border-radius: 50%;
  }
  main header img:last-child {
    width: 24px;
    margin-top: 8px;
  }
  main header div {
    margin-left: 10px;
    margin-right: 145px;
  }
  main header h2 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  main header h3 {
    font-size: 14px;
    font-weight: normal;
    color: #7e818a;
  }

  #chat {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    overflow-y: scroll;
    border-top: 2px solid #fff;
    justify-content: flex-end;
    align-items: end;
    height: 90%;
    flex-direction: column;
  }
  #chat li {
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
  }
  #chat h2,
  #chat h3 {
    display: contents;
    font-size: 13px;
    font-weight: normal;
    color: rgb(19, 17, 17);
  }
  #chat h3 {
    color: rgb(231, 62, 62);
  }
  #chat .entete {
    margin-bottom: 5px;
  }
  #chat .message {
    padding: 20px;
    color: #fff;
    line-height: 25px;
    max-width: 90%;
    display: inline-block;
    text-align: left;
    border-radius: 48px;
  }
  #chat .you .message {
    background-color: #303132;
    font-weight: bold;
  }

  .liMessageStepActive {
    background-color: rgb(224, 224, 224);
  }
}

.historiquesStep , .dashboardStep , .historiqueReservations {
  --main-bg: hsl(217, 54%, 11%);
  --card-bg: hsl(0, 0%, 96%);
  --line: hsl(215, 32%, 27%);
  --soft: hsl(0, 0%, 0%);
  --cyan: hsl(148, 100%, 38%);

  .historiquesStepContainer {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
  .historiquesStepCard {
    width: 95%;
    height: 100%;
    background-color: var(--card-bg);
    border-radius: 20px;
    margin-bottom: 30px;
    position: relative;
    box-shadow: 0px 0px 30px 4px #8f8f8f73;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .box-1 {
    width: 100%;
    height: 218px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: 0.5s;
    background: #ececec;
    border-radius: 25px;

    img {
      width: 100%;
      object-fit: cover;

      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }
  }

  .green {
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    display: none;
    border-radius: inherit;
    transition: 0.5s;
  }

  h3 {
    color: rgb(0, 0, 0);
    font-size: 1.3rem;
    margin: 20px 0;
    cursor: pointer;
    margin-top: 20px;
  }
  .box-2 p {
    font-size: 14px;
    color: #2e2f2f;
    line-height: 30px;
    margin-bottom: 29px;
  }

  .box-2 {
    padding: 30px;
    padding-top: 5px;

    .reservationStateDiv {
      color: white;
      width: 45%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      top: 178px;
      right: 0px;
      position: absolute;
    }

    .reservationStateDivBlue {
      background-color: #2592ccc2;
    }

    .reservationStateDivGreen {
      background-color: #2acc25be;
    }

    .reservationStateDivPassed {
      background-color: #fd7d14c0;
    }

    .reservationStateDivDisplayNone {
      display: none;
    }
  }
  .shop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
  }
  button svg {
    margin-right: 7px;
  }
  button:first-of-type {
    font-size: 1rem;
    color: var(--cyan);
  }
  button:last-of-type {
    font-size: 1rem;
    color: var(--soft);
  }

  .card-foot {
    position: absolute;
    bottom: 7%;
    right: 33%;

    button {
      padding: 10px 25px;
      //   background-color: rgb(253, 114, 114);
      background-color: rgb(184, 54, 54);

      color: white;
      border-radius: 50px;
      font-weight: bold;
      &:hover {
        background-color: rgb(255, 82, 82);
      }
    }

    .btnCommenter {
      background-color: #0c73aa;

      &:hover {
        background-color: #015a8a;
      }
    }
  }
  .card-foot img {
    margin-right: 15px;
    border: 2px solid white;
    border-radius: 50%;
  }
  .card-foot p {
    margin-top: 23px;
  }
//   span {
//     color: white;
//     cursor: pointer;
//   }

  @media only screen and (max-width: 700px) {
    .card {
      margin: 20px;
      height: 80vh;
    }
  }
}

.canceledReservation {
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 0, 0);
}

.sendIconChatApp {
  cursor: pointer;
  color: rgb(16, 17, 17);
  font-size: 30px;

  &:hover {
    color: #2591cc;
    font-size: 33px;
    outline: none;
  }
}

.historiquesStep ,.historiqueReservations {
  .topBarAnnoncesFilter {
    background: white;
  }
  .ulTopSideBar {
    .form-search {
      input {
        border-radius: 8px;
        outline: none;
      }
    }
    select {
      width: 50%;
      border: none;
      background-color: rgba(110, 110, 110, 0.09);
      text-align: center;
      border-radius: 5px;
      margin-left: 20px;
      height: 40px;
      outline: none;

      cursor: pointer;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    li {
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

#commentReservationModal {
  .vue-star-rating {
    width: 170px;
  }
  .postButton {
    background-color: #17191a;
    color: white;
    outline: none;
    &:hover {
      background-color: #232729;
    }
  }

  .closeButton {
    background-color: #b91a00;
    color: white;
    outline: none;
    &:hover {
      background-color: #f35037;
    }
  }

  .modal-body {
      margin: 0;

      h2{
          padding: 0;
          margin: 0;
          padding-bottom: 25px;

      }

    h2 {
      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }
  }

  .footreCommentModal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .modal-content {
    width: 60%;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .modal-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
}
</style>


<style lang="sass">
#commentReservationModal
 .comments
    width: 100%
    background: #fff
    padding: 20px 30px
    border-radius: 5px

 .comments-form
 ul
     list-style: none
     li
         margin-bottom: 15px
     input[type='text'], textarea

         padding: 10px
         width: 100%

         border: 1px solid #ccc
         border-radius: 5px
         background: #f5f5f5
         &::placeholder
             font-family: 'Quicksand', sans-serif
         &:focus
             background: #fff
     textarea
         width: 100%
         height: 80px
         resize: none

 .comment
     position: relative
     border-top: 1px dotted #bbb
     padding: 10px 20px
 .comment-time
     position: absolute
     top: 2px
     right: 20px
     color: #777
 h4
     margin-top: 10px

 footer
     float: right
     color: #777
     font-size: 0.8em
</style>
