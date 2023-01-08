<template>
  <div>
    <div class="content">
      <div class="dashboardContainer">
        <div class="leftSideBarDashboard">
          <ul class="leftSideBarUl">
            <li @click="windowStepFunction(1)" :class="windowStep==1 ? 'sideBarLinkActive':''" class="sideBarLink">
<i class="fas fa-tachometer-alt  sideBarLinkIcon"></i>
              <span>Dashboard</span>
            </li>
            <li @click="windowStepFunction(2) " :class="windowStep==2 ? 'sideBarLinkActive':''" class="sideBarLink">
              <i class="fas fa-comments sideBarLinkIcon"></i>
              <span>Messages</span><span v-if="newMessageCheckPrimary" class="red statusRed"></span>
            </li>
            <li @click="windowStepFunction(3) " :class="windowStep==3 ? 'sideBarLinkActive':''" class="sideBarLink">
              <i class="fas fa-bell sideBarLinkIcon"></i>
              <span>Notifications</span><span v-if="newNotificationsCheck" class="red statusRed"></span>
            </li>

            <li @click="windowStepFunction(6)" :class="windowStep==6 ? 'sideBarLinkActive':''" class="sideBarLink">
             <i class="fas fa-digital-tachograph sideBarLinkIcon"></i>
             <span>Annonces</span>
            </li>

            <li @click="windowStepFunction(5)" :class="windowStep==5 ? 'sideBarLinkActive':''" class="sideBarLink">
              <i class="fas fa-clock sideBarLinkIcon"></i>
             <span>Historiques</span>
            </li>

          </ul>
        </div>

        <div class="leftSideBarDashboardMobile">
            <div class="expand-collapse">
                <img src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"/>
            <div>
             <ul class="leftSideBarUl">
            <li @click="windowStepFunction(1)" :class="windowStep==1 ? 'sideBarLinkActive':''" class="sideBarLink">
            <i class="fas fa-tachometer-alt  sideBarLinkIcon"></i>

              <span>Dashboard</span>
            </li>
            <li @click="windowStepFunction(2)" :class="windowStep==2 ? 'sideBarLinkActive':''" class="sideBarLink">
            <i class="fas fa-comments sideBarLinkIcon"></i>

              <span>Messages</span><span v-if="newMessageCheckPrimary" class="red statusRed"></span>
            </li>
            <li @click="windowStepFunction(3) " :class="windowStep==3 ? 'sideBarLinkActive':''" class="sideBarLink">
                                      <i class="fas fa-bell sideBarLinkIcon"></i>

              <span>Notifications</span><span v-if="newNotificationsCheck" class="red statusRed"></span>
            </li>

            <li @click="windowStepFunction(6)" :class="windowStep==6 ? 'sideBarLinkActive':''" class="sideBarLink">
             <i class="fas fa-digital-tachograph sideBarLinkIcon"></i>

              <span>Annonces</span>
            </li>

            <li @click="windowStepFunction(5)" :class="windowStep==5 ? 'sideBarLinkActive':''" class="sideBarLink">
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
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Réservations</h4><span class="hind-font caption-12 c-dashboardInfo__count">5</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Montant total payé</h4>
          <span class="hind-font caption-12 c-dashboardInfo__count">€3531.53</span>   </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Nombre de nuits</h4><span class="hind-font caption-12 c-dashboardInfo__count">48</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Point Fidélité</h4><span class="hind-font caption-12 c-dashboardInfo__count">1675</span>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>

          <!-- Messages  -->
          <div v-if="windowStep == 2" class="messagesStep">
          <!-- <div id="messagesStepContainer">
	<aside>

		<ul v-if="messages">

			<li :class="messagesStep==1 ? 'liMessageStepActive' : ''" @click="messagesStep=1">
            <div>
                <i class="fas fa-envelope"></i>
            </div>
				<div>
					<h2>Réçus 					<span v-if="newMessageCheck" class="status red statusRed"></span></h2>
				</div>
			</li>

            <li
@click="messagesStep=2 "  :class="messagesStep==2 ? 'liMessageStepActive' : ''">
            <div>
<i class="fas fa-paper-plane"></i>
            </div>
				<div>
					<h2>Envoyés</h2>
				</div>
			</li>

		</ul>
	</aside>
	<main v-if="messagesStep==2">
		<header>
			<div>
				<h3>{{ sentMessageCount }} messages</h3>
			</div>
		</header>
		<ul  id="chat">
			<li v-show="message.sender_user_id==user.id" v-for="(message,key) in messages" :key="key" class="you">
				<div class="entete">
					<h2>{{ message.to_name }}</h2>
					<h3>{{ message.created_at }}</h3>
				</div>

<div class="message">
{{message.content}}					</div>
			</li>

		</ul>

	</main>



    <main v-if="messagesStep==1">
		<header>
			<div>
				<h3>{{ receivedMessageCount }}  messages</h3>
			</div>
		</header>
		<ul  id="chat">
			<li v-show="message.receiver_user_id==user.id" v-for="(message,key) in messages" :key="key" class="you">
				<div class="entete">
					<span v-if="message.readingState==0" class="status green"></span>
					<h2>{{ message.to_name }}</h2>
					<h3>{{ message.created_at }}</h3>
				</div>

<div class="message">
{{message.content}}				</div>
			</li>

		</ul>

	</main>
</div> -->























<div class="container">
<div class="row clearfix">
    <div class="col-lg-12">
        <div     style="display: flex;
justify-content: center;
align-items: center;
height: 97vh;"                        v-if="
                          !conversations.length > 0
                        "
>

                    <img
                    style="width: 40%;"
                            src="../../../../../public/images/chat-app.svg"
                          />
                </div>

        <div  v-if="
                          conversations.length > 0
                        " class="card chat-app">



            <div>
                            <div  id="plist" class="people-list">
                <div class="input-group">
                    <div  @click="getUserMessages" style="cursor:pointer;" class="input-group-prepend">
                        <span  class="input-group-text">
                             <i

                            class="fas fa-sync-alt"
                          ></i>
                        </span>
                    </div>
                    <input type="text" v-model="conversationSearchValue" class="form-control shadow-none" placeholder="Chercher...">
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                    <li class="clearfix" v-if="sortedConversations.length==0">
                     <div class="about">
                            <div class="name">Aucun résultat </div>
     </div>

                    </li>
                    <li class="clearfix  chatMessageCountRelative  " :class="
                            conversation.id == conversation_id
                              ? 'active'
                              : ''"
                               @click="getConversationMessages(conversation.id, key)"
                          v-for="(conversation, key) in sortedConversations"
                          :key="key"
                              >

                                                       <span class="chatMessageCount" v-if="conversation.msgCount>0" >{{conversation.msgCount}}</span>

                        <img
                             v-if="sortedConversations[key].avatar"
                            :src="
                              'storage/' +
                             sortedConversations[key].avatar.path +
                              '/' +
                              sortedConversations[key].avatar.name
                            "
                          />
                          <img
                            v-else
                            src="../../../../../public/images/avatar.png"
                          />
                        <div class="about">
                            <div class="name"> {{ sortedConversations[key].userAccount.lastname }}
                              {{ sortedConversations[key].userAccount.firstname }}</div>


                            <div class="status">
                           <span class="time text-muted small">{{getDateForConversation(conversation.messages[
                              conversation.messages.length - 1
                            ].created_at)}}</span>


</div>




                        </div>
                    </li>

                </ul>
            </div>



            </div>

<div>
            <div   class="chat">




                <div  v-if="sortedConversationMessages.length > 0" class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6 topBarChat">
                            <a style="display: flex;justify-content: start;align-items: center;" href="javascript:void(0);" data-toggle="modal" data-target="#view_info">

<img
                            v-if="sortedConversations[selectedUserAvatarTopBar].avatar"
                            :src="
                              'storage/' +
                             sortedConversations[selectedUserAvatarTopBar].avatar.path +
                              '/' +
                              sortedConversations[selectedUserAvatarTopBar].avatar.name
                            "
                          />
                          {{ sortedConversations[selectedUserAvatarTopBar].userAccount.lastname }}
                              {{ sortedConversations[selectedUserAvatarTopBar].userAccount.firstname }}
                          <img

                            v-if="!sortedConversations[selectedUserAvatarTopBar].avatar"
                            src="../../../../../public/images/avatar.png"
                          />
</a>
                            <div class="chat-about">
                                <h6 v-if="
                                sortedConversations[selectedUserAvatarTopBar]
                              " class="m-0 p-0"> {{
                                sortedConversations[selectedUserAvatarTopBar].lastname
                              }}
                              {{
                                sortedConversations[selectedUserAvatarTopBar].firstname
                              }}</h6>
                            </div>
                        </div>
                        <div style="text-align: right;display: flex;justify-content: end;align-items: center;"
                        class="col-lg-6 hidden-sm text-right">
                                <small style="margin-right:10px;">Connecté il y'a 21 minutes   </small>

                            <a @click="conversationMessages =[]" href="javascript:void(0);"><i class="fas fa-times"></i></a>

                            </div>
                    </div>
                </div>
                <div v-if="sortedConversationMessages.length > 0" style="
    height: 515px;
" class="chat-history">
                    <ul class="m-b-0">

                        <li v-for="(msg, key) in sortedConversationMessages"
                            :key="key"
                             class="clearfix "
                             :class="
                              msg.sender_user_id == user.id
                                ? 'messageOtherDiv'
                                : ''">

                            <div :class="
                              msg.sender_user_id == user.id
                                ? 'my-message'
                                : 'other-message'
                            " class="message  float-left">  {{ msg.content }} </div>
                            <div class="message-data text-right">

 <img
                             v-if=" (key < sortedConversationMessages.length-1 ? sortedConversationMessages[(sortedConversationMessages.length-2)-key].sender_user_id!=sortedConversationMessages[(sortedConversationMessages.length-1)-key].sender_user_id : false )

                                    &&
                                      sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar && msg.sender_user_id != user.id
                                    "
                            :src="
                              'storage/' +
                             sortedConversations[selectedUserAvatarTopBar].avatar.path +
                              '/' +
                              sortedConversations[selectedUserAvatarTopBar].avatar.name
                            "
                          />
                          <img

 v-if=" (key < sortedConversationMessages.length-1 ? sortedConversationMessages[(sortedConversationMessages.length-2)-key].sender_user_id!=sortedConversationMessages[(sortedConversationMessages.length-1)-key].sender_user_id : false )

                                    &&
                                      !sortedConversations[
                                        selectedUserAvatarTopBar
                                      ].avatar && msg.sender_user_id != user.id
                                    "
                           src="../../../../../public/images/avatar.png"
                          />
                          <span v-if="(key < sortedConversationMessages.length-1 ? sortedConversationMessages[(sortedConversationMessages.length-2)-key].sender_user_id!=sortedConversationMessages[(sortedConversationMessages.length-1)-key].sender_user_id : false )

                                    &&
                                       msg.sender_user_id != user.id
                                    " class="message-data-time">
                                                                  {{ getDateForConversation(msg.created_at) }}

                                </span>

                                   <span v-if="(key < sortedConversationMessages.length-1 ? sortedConversationMessages[(sortedConversationMessages.length-2)-key].receiver_user_id!=sortedConversationMessages[(sortedConversationMessages.length-1)-key].receiver_user_id : false )
////// hnaaa laaaaaaazem nregil l
                                    &&
                                       msg.sender_user_id == user.id
                                    " class="message-data-time">
                                                                  {{ getDateForConversation(msg.created_at) }}

                                </span>
</div>
                        </li>








                    </ul>
                </div>
                <div v-if="sortedConversationMessages.length > 0"  class="chat-message clearfix">
                    <div class="input-group mb-0">

                          <form
                               style="width: 100%;display: flex;"
                                @submit.prevent="sendMessage()"
                              >

                        <input v-model="messageToSend.content" type="text" class="form-control shadow-none" placeholder="...">
                     <div class="input-group-prepend">
                             <button type="submit"><span class="input-group-text"><i class="fas fa-paper-plane"></i></span>                                </button>

                        </div>

                          </form>
                    </div>
                </div>


                <div     style="display: flex;
justify-content: center;
align-items: center;
height: 97vh;"                        v-else
>
                    <img
                    style="width: 40%;"
                            src="../../../../../public/images/chat-app.svg"
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
                          <i  @click="getUserMessages" class="fas fa-sync-alt"></i>
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
                            v-if="usersByConversationArray.user_avatar"
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
                            v-if="usersByConversationArray.length>0"
                            class="text"
                          >
                            <h6>
                              {{ usersByConversationArray[key].lastname }}
                              {{ usersByConversationArray[key].firstname }}
                            </h6>

                            <p class="text-muted">
                                {{ getMessagePreview(conversation.messages[
                                  conversation.messages.length - 1
                                ].content) }}
                            </p>
                          </div>


                           <span class="time text-muted small">{{getDateForConversation(conversation.messages[
                              conversation.messages.length - 1
                            ].created_at)}}</span>



                        <span v-if="conversation.readState==true" class="red statusRed"></span>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-8 p-1">
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
                      <div v-if="sortedConversationMessages.length>0" class="chat-panel">
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
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-12">
                            <div class="chat-box-tray">
                              <form style="width: 100%;" @submit.prevent="sendMessage()">
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

            <div v-if="notifications.length>0" class="rowNotification notification-container">
                                          <h1>Notifications</h1>

              <p  class="dismiss text-right">
                                <a>Vous avez {{ newNotificationsCheckCount }} nouvelle(s) notification(s) </a>

              </p>
              <div v-for="(notification , key) in notifications" :key="key" :class=" !notification.read_at ? 'cardReadStateTrue' : 'cardReadStateFalse'" class="card notification-card ">

                <div class="card-body">
                  <table>
                    <tr>
                      <td style="width: 100%">
                        <div class="card-title">
                            <img v-if="notification.avatar" class="avatarNotification" :src="'/storage/'+notification.avatar.path+'/'+notification.avatar.name"
                                  :alt="notification.id+'-'+notification.created_at">

                            <img v-else class="avatarNotification"  src="../../../../../public/images/avatar.png"  :alt="notification.id+'-'+notification.created_at" srcset="">

                            <div>
                        <b>{{ notification.from_users[0].lastname }} {{ notification.from_users[0].firstname }}</b><br> {{ notification.content }}<br> <span>{{ notification.created_at }}</span>
                            </div>

                             <div v-if="!notification.read_at">
                                 <i  class="fas fa-exclamation-circle notificationDashboardDesign "  :class="!notification.read_at ? 'notificationDashboardReadingStateFalse' : ''"></i>
                            </div>

                        </div>
                      </td>
                      <td style="width: 10%;display: flex;justify-content: center;align-items: center;">
                        <a
                                                  aria-label="first link"

                        class="dismiss-notification"
                        @click="deleteNotification(notification.id)"
                          >
                          <i class="fas fa-trash"></i>
                          </a>

<router-link aria-label="second link"  :to="notification.link">
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

            <div style="
    display: flex;
    justify-content: center;
    align-items: center;
        flex-direction: column;
        height:600px;
" v-else>

<h3>0 Notifications</h3>
                <img style="
    width: 30%;
" src="../../../../../public//images/noNotification.svg" alt="">
            </div>
          </div>


            <div v-if="windowStep == 6" class="annoncesStep">

            <div class="topBarAnnoncesFilter">
                 <div class="filtersDiv">
          <ul class="ulTopSideBar">
              <li>
                  <label for=""></label>

<div class="form-search" method="get" action="#">
            <input v-model="titreChFiltre" type="search" name="search" placeholder="Filtrer par titre">



        </div>
              </li>
               <li>
              <label for="sortFilter">Catégorie : </label>
              <select

                v-model="typeLogementCh"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilter"

              >

              <option selected value="">
                  Tout <small>({{ typeLogementCount("") }})</small>
                </option>
                <option
                  v-for="(typeLogement, key) in typesLogement"
                  :key="key"
                  :value="typeLogement.name"
                >
                  {{ typeLogement.name }}
                  <small>({{ typeLogementCount(typeLogement.name) }})</small>
                </option>

               </select>
            </li>
            <li>
              <label for="sortFilter">Trier par :</label>
              <select
                v-on:change="orderByChanged()"
                v-model="sortValue"
                class="selectSortBy"
                name="sortFilter"
                id="sortFilter"
              >
                <option value="priceAsc">Prix : Ordre croissant</option>

                <option value="priceDesc">Prix : Ordre décroissant</option>

                <option value="comments">
                  Moyenne des commentaires client
                </option>

                <option value="news" selected>Nouveautés</option>
                <option value="anciens" selected>Anciens</option>

              </select>
            </li>

          </ul>
        </div>
            </div>



                <main class="gridCardsMain">



                    <!-- <section v-for="(userAnnonce , key) in userAnnonces" :key="key" class="cardSection pt-0">
                        <figure class="figureCard">
                        <img  class="imgCardAnnonce"  v-for="(userAnnonceImage,key) in userAnnonce.images " v-show="userAnnonceImage.default=='true'" :key="key" :src="'storage/'+userAnnonceImage.path+'/'+userAnnonceImage.image">
                        </figure>
                        <article class="articleCard">
                            <div class="cardContent">
                            <div class="topDivCardAnnonce">
                                <div><span class="spanAnnonceCard">{{ userAnnonce.typeLogement }}</span></div>
                                <div><p class="spanAnnonceCard"> #{{ userAnnonce.id }}</p></div>
                            </div>

                        <div class="contentCardAnnonce">

                        <h1 class="cardAnnonceTitle">{{ userAnnonce.title }}</h1>

                        <ul>
                            <li><p class="paraghAnnonce">{{ userAnnonce.address }}   </p></li>
                            <li><p class="paraghAnnonce" v-if="userAnnonce.compAddress">{{ userAnnonce.compAddress }} </p></li>
                            <li><p class="paraghAnnonce">{{ userAnnonce.city }} , {{ userAnnonce.postalCode }} </p></li>
                            <li><p class="paraghAnnonce">{{ userAnnonce.country }}</p></li>

                        </ul>

                       </div>
                        <div class="bottomDivCardAnnonce">
                                                    <p class="bottomDivCardAnnonceP">{{ userAnnonce.priceDashboard }} €</p><br>
                        </div>

                        </div>
                        </article>

                    </section> -->



<div v-for="(userAnnonce , key) in sortedAnnonces" :key="key" id="containerAnnonce">

	<div class="product-details">

	  <h3>
                    {{ userAnnonce.title }}
                  </h3>


<ul>
    <li><p class="information">{{userAnnonce.address}}</p></li>
    <li v-if="userAnnonce.compAddress"><p class="information">{{userAnnonce.compAddress}}</p></li>
    <li><p class="information">{{userAnnonce.city}}</p></li>
        <li><p class="information">{{userAnnonce.postalCode}}</p></li>
        <li><p class="information">{{ userAnnonce.country }}</p></li>

</ul>



<div class="multi-button">

  <router-link

                      :to="'/updateAnnonce/?annonce_id=' + userAnnonce.id"
                      >
                      <button class="button" id="updateAnnonceBtn"><span><i class="fas fa-pen-fancy"></i></span></button>
</router-link>

 <router-link

                      style="text-decoration: none"
                      :to="'/annonce/?id=' + userAnnonce.id"
                      class="text-secondary"
                      @click="scrollToTop"
                    >
  <button class="button" id="showAnnonceBtn"><span><i class="fas fa-eye"></i></span></button>
</router-link>

 <router-link

                      style="text-decoration: none"
                      :to="'/disponibilityAnnonce/?annonce_id='+userAnnonce.id"
                      class="text-secondary"
                      @click="scrollToTop"
                    >
  <button class="button" id="calendarAnnonceBtn"><span><i class="fas fa-calendar-alt"></i></span></button>
</router-link>


  <button                       @click="deleteAnnonce(userAnnonce.id)"
 class="button" id="deleteAnnonceBtn"><span><i class="fas fa-trash"></i></span></button>
</div>


</div>





<div class="product-image">

	<img v-for="(userAnnonceImage,key) in userAnnonce.images " v-show="userAnnonceImage.default=='true'" :key="key" :src="'storage/'+userAnnonceImage.path+'/'+userAnnonceImage.image">

<div class="infoDiv">
	<ul>
		<li><strong>Surface: </strong>{{userAnnonce.surface}} cm²</li>
		<li><strong>Nombre de couchages: </strong>{{userAnnonce. numberOfBeds}}</li>
		<li><strong>Capacité d'accueillement : </strong>{{userAnnonce.capacity}}</li>
		<li><strong> Animaux autorisés : </strong>{{userAnnonce.animaux }}</li>
	</ul>
</div>
</div>

</div>



 <div class="resultCount" >
          <h3> Affichage de {{ sortedAnnonces.length }} sur  {{ userAnnonces.length }} résultats </h3>


            <button v-show="sortedAnnonces.length>0 && userAnnonces.length>sortedAnnonces.length " @click="showMoreAction"  class="btn btn-dark">Voir plus</button>
        </div>




                </main>









            </div>


          <div v-if="windowStep == 5" class="historiquesStep">

                <h2 class="big-heading">    Historique des réservations</h2>
                <!-- card div -->
                <div class="tableReservation">
                <h2 class="heading">#Réservation ID</h2>
                <div class="block">
                <p>Titre de l'annonce
                    <span class="priceDashboard">$128/
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
                <p>informations client
                    <ul class="options">
                    <li>Nom et prénom : </li>
                    <li>Email :</li>
                    <li>Téléphone :</li>

                    </ul>
                </p>
                </div>
                <div class="block">
                <img style="margin-bottom:20px" src="https://www.leboisderosoy.com/wp-content/uploads/2019/06/7CMl5fvE-scaled.jpeg" alt="" srcset="">
                </div>
                <button class="btn">
                <p>Total : 999$</p>
                </button>
                </div>

        </div>





        </div>
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

$(document).ready(function () {
  $(".expand-collapse img").each(function () {
    var tis = $(this),
      state = false,
      answer = tis.next("div").slideUp();
    tis.click(function () {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass("active", state);
    });
  });
});
export default {
  components: {
    loadingPage,
  },
  data() {
    return {
      loading: true,

      userRole: "",
      windowStep: 1,
      userAnnonces: [],
      owner: {
        owner_id: "",
      },

      token: "",
      messagesStep: 1,

      messages: [],
      user: {
        id: "",
        token: "",
      },

      sentMessageCount: 0,
      receivedMessageCount: 0,
      newMessageCheck: false,
      newMessageCheckPrimary: false,

      newNotificationsCheck: false,

      notifications: [],
      notificationsAvatars: [],

      newNotificationsCheckCount: 0,
      typeLogementCh: "",
      sortValue: "news",
      typeLogementArray: [],

      limitCardsShowen: 4,

      titreChFiltre: "",

      typesLogement: [],

      conversations: [],
      conversation_id: 0,
      conversationMessages: [],
      usersByConversationArray: [],

      usersArray: [],

      selectedUserAvatarTopBar: "",
      messageToSend: {
        content: "",
        sender_user_id: "",
        receiver_user_id: "",
      },

      msgCount: 0,
      conversationSearchValue: "",
    };
  },

  computed: {
    sortedConversations: function () {
      function compare(a, b) {
        if (a.created_at > b.created_at) return 1;
        if (a.created_at < b.created_at) return -1;
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

    sortedConversationMessages: function () {
      function compare(a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      }

      return this.conversationMessages.sort(compare);
    },
    sortedAnnonces() {
      if (this.titreChFiltre != "") {
        this.limitCardsShowen = 10000;
        this.sortValue = "news";
        return this.userAnnonces
          .filter((item, index) => {
            return this.titreChFiltre
              .toLowerCase()
              .split(" ")
              .every((v) => {
                if (this.typeLogementCh != "") {
                  return (
                    item.typeLogement.includes(this.typeLogementCh) &&
                    item.title.toLowerCase().includes(v)
                  );
                } else {
                  return item.title.toLowerCase().includes(v);
                }
              });
          })
          .sort(this.orderBy);
      } else {
        if (this.sortValue == "news") {
          return this.userAnnonces
            .sort((a, b) => {
              return a.id < b.id;
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "anciens") {
          return this.userAnnonces
            .sort((a, b) => {
              return a.id > b.id;
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "priceAsc") {
          return this.userAnnonces
            .sort((a, b) => {
              return parseInt(a.price) > parseInt(b.price);
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else if (this.sortValue == "priceDesc") {
          return this.userAnnonces
            .sort((a, b) => {
              return parseInt(a.price) < parseInt(b.price);
            })
            .filter((item, index) => {
              return (
                index < this.limitCardsShowen &&
                item.typeLogement.includes(this.typeLogementCh)
              );
            });
        } else {
          return this.userAnnonces;
        }
      }
    },
  },

  mounted() {
    this.user.token = localStorage.getItem("token");
    this.user.id = localStorage.getItem("userId");

    this.token = localStorage.getItem("token");
    this.owner.owner_id = localStorage.getItem("userId");
    console.log("ower_id : ", this.owner.owner_id);

    if (localStorage.getItem("windowStep") != "") {
      this.windowStep = localStorage.getItem("windowStep");
    }

    this.userRole = localStorage.getItem("userRole");

    if (localStorage.getItem("token") != "") {
      this.loggedIn = true;
    } else if (
      this.userRole == "client" ||
      this.userRole == "admin" ||
      this.userRole == "moderateur" ||
      localStorage.getItem("token") == ""
    ) {
      this.loggedIn = false;

      this.$router.push({ path: "/" });
    }

    this.getTypeLogement();
    this.getUserMessages();

    this.getAnnonceOwner();

    this.getUserNotifications();

    if (this.windowStep == 3) {
      this.changeNotificationReadingState();
    }

    this.intervalid1 = setInterval(
      function () {
        if(this.windowStep==2){
        this.getUserMessages();
        }
      }.bind(this),
      100000
    );
  },

  methods: {

 async updateTheNewPropretySweetAlert(id){

 let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      let prop = {
          name:'',
      };


      await axios.get('api/getPropretyById/'+id , config).then((response) => {
          prop.name = response.data.proprety[0].name
      });



    const { value: email } = await Swal.fire({
  icon :'info',
  title: 'Nouvelle propriété',
  input: 'text',
  inputLabel: prop.name,
  inputPlaceholder: '...'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
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

    moment: function () {
      return moment();
    },
    getDateForConversation(date) {
      let dateAux = moment(date, "DD-MM-YYYY hh:mm:ss").format("DD/MM/YYYY");

      let today = new Date();
      let ch = `${today.getDate()}/${
        today.getMonth() + 1
      }/${today.getFullYear()}`;

      console.log("enannanan hnaaaa ,  : ", ch, dateAux);
      if (ch == dateAux) {
        return moment(date, "DD-MM-YYYY hh:mm:ss").format("hh:mm");
      } else {
        return moment(date, "DD-MM-YYYY hh:mm:ss").format("DD-MM-YYYY");
      }
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
          this.usersByConversationArray[this.selectedUserAvatarTopBar].id,
        content: aux,
        from_name:
          localStorage.getItem("lastname") +
          " " +
          localStorage.getItem("firstname"),
        to_name:
          this.usersByConversationArray[this.selectedUserAvatarTopBar]
            .lastname +
          " " +
          this.usersByConversationArray[this.selectedUserAvatarTopBar]
            .firstname,
      };

      axios
        .post("api/sendMessage", this.messageToSend, config)
        .then((response) => {
          this.messageToSend.content = "";
          this.selectedUserAvatarTopBar = 0;
          this.getUserMessages();
        });
    },

    getConversationMessages(id, key) {
      this.conversationMessages = [];

      console.log("ffff , ", this.usersByConversationArray[key]);

      this.selectedUserAvatarTopBar = key;
      this.conversation_id = id;

      this.newMessageCheckPrimary = false;

      this.changeMessageReadingState(id);

      this.conversations.forEach((element) => {
        if (element.id == id) {
          element.messages.forEach((msg) => {
            this.conversationMessages.push(msg);
          });
        }
      });
      console.log(
        "conversationMessages :::  conversationMessages ::: ",
        this.conversationMessages
      );
    },

    orderByChanged() {
      this.sortValue = this.sortValue;
      this.typeLogementCh = "";
      this.titreChFiltre = "";
    },
    getTypeLogement() {
      this.typesLogement = [];
      axios
        .get("/api/getTypeLogement")
        .then((response) => {
          console.log("");
          response.data.typesLogement.forEach((element) => {
            this.typesLogement.push(element);
          });
        })
        .catch((err) => {});
    },
    typeLogementCount(ch) {
      let typeLogementCount = 0;

      if (ch != "") {
        this.userAnnonces.forEach((element) => {
          if (element.typeLogement == ch) {
            typeLogementCount++;
          }
        });

        return typeLogementCount;
      }
      if (ch == "") {
        return this.userAnnonces.length;
      }
    },

    showMoreAction() {
      this.limitCardsShowen += 4;
    },

    deleteAnnonce(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer cette annonce ?",

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
          this.deleteAnnonceAux(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Annonce à été bien suprimée",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    deleteAnnonceAux(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      axios
        .delete("api/deleteAnnonce/" + id, config)
        .then((result) => {
          this.getAnnonceOwner();
        })
        .catch((err) => {});
    },

    deleteNotificationAux(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      console.log("id ::   ", id);

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
      console.log("noooootttttiiiiii");

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

      this.owner.id = localStorage.getItem("userId");

      axios
        .post("/api/getUserNotifications", this.owner, config)
        .then((response) => {
          if (response.data.notifications.length > 0) {
            response.data.notifications.forEach((element) => {
              response.data.avatars.forEach((elAux) => {
                console.log("avatarsavatarsavatars :   ", element, elAux);
                if (elAux.user_id == element.from_id) {
                  element.avatar = elAux;
                }
              });

              this.notifications.push(element);

              if (element.read_at == null) {
                this.newNotificationsCheck = true;
                this.newNotificationsCheckCount++;
              }
            });
          }
          console.log("notifications  dfdfdf:   ", this.notifications);

          if (response.data.from_users.length > 0) {
            response.data.from_users.forEach((element, key) => {
              console.log("hahaha");
              this.notifications[key].from_users = element;
            });
          }

          console.log(
            "elemenotificationsAvatarsnotificationsAvatarsnt :: ",
            this.notifications
          );
          this.loading = false;
        });
    },

    changeMessageReadingState(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };

      let req = {
        conversation_id: this.conversation_id,
        userId: this.owner.owner_id,
      };

      axios
        .post("api/changeMessageReadingState", req, config)
        .then((result) => {});
    },

    getUserMessages() {
      this.loading = true;

      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      this.conversationSearchValue = "";

      this.messages = [];

      this.usersArray = [];
      this.usersByConversationArray = [];
      this.conversations = [];

      let req = {
        id: this.owner.owner_id,
      };
      axios.post("api/getUserMessages", req, config).then((response) => {
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
              msg.receiver_user_id == this.owner.owner_id &&
              msg.readingState == "0"
            ) {
              this.msgCount++;

              this.newMessageCheck = true;
              this.newMessageCheckPrimary = true;
            }

            if (msg.sender_user_id != this.owner.owner_id) {
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

            if (msg.receiver_user_id != this.owner.owner_id) {
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
          element.msgCount = this.msgCount;

          element.readState = this.newMessageCheck;
        });

        this.usersArray.forEach((el) => {
          let reqAux = {
            id: el,
          };
          axios.post("api/getUser/", reqAux).then((result) => {
            result.data.users.forEach((x) => {
              this.usersByConversationArray.push(x);
            });
          });
        });
        this.loading = false;
      });
    },

    windowStepFunction(x) {
      this.windowStep = x;
      localStorage.setItem("windowStep", x);

      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }

      if (x == 3) {
        this.changeNotificationReadingState();
      }
    },

    getAnnonceOwner() {
      this.userAnnonces = [];
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      axios
        .post("api/getAnnonceByUserId", this.owner, config)
        .then((response) => {
          console.log("getAnnonceByUserId : ", response.data.userAnnonces);
          console.log("this.typesLogement : ", this.typesLogement);

          response.data.userAnnonces.forEach((element) => {
            console.log("elementelementelement: ", element);

            this.typesLogement.forEach((elementaux) => {
              console.log("elementaux: ", element);

              if (elementaux.id == element.type_logement_id) {
                element.typeLogement = elementaux.name;
              }
            });
            console.log(this.userAnnonces);

            this.userAnnonces.push(element);
            this.typeLogementArray.push(element.typeLogement);
          });

          console.log(this.userAnnonces);
        })
        .catch((err) => {
          console.log("getAnnonceByUserIdError : ", err);
        });
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>


<style lang="scss">
/* fonts  */
@import url("https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web");

#containerAnnonce {
  box-shadow: 0 15px 30px 1px rgba(221, 221, 221, 0.31);
    background: rgb(225 243 255 / 90%);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 0;
  margin-bottom: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 55vw;

.multi-button {
 background-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: 14px;
    padding: 7px;
    place-items: center;
    display: flex;
    justify-content: start;
    position: absolute;
    width: 100%;
    bottom: 8px;
    left: 15px;
     @media screen and (max-width:1200px) {
                 bottom: 22%;
    left: 15px;

    }
}

#updateAnnonceBtn {
  background-color: rgb(37, 38, 39);

}

#showAnnonceBtn {
    background-color: #3d76a1;

}

#deleteAnnonceBtn {
    background-color: #dc3545;
}

#calendarAnnonceBtn {
    background-color: #ffa807;
}


.button {
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 9%), 0 6px 15px 0 rgb(0 0 0 / 9%);
    padding: 6px 12px;
    font: 15px Ubuntu;
    color: white;
    border-radius: 3px;
    margin-right: 10px;

}
}

/* 	Product details  */
.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 15px;
        height: 400px;
  float: left;
  width: 50%;
  padding-bottom: 0;
  @media screen and (min-width:1200px) {
                height: 320px;

    }

}

/* 	Product Name */
#containerAnnonce .product-details h1 {
  font-family: "Old Standard TT", serif;
  position: relative;
  font-size: 34px;
  color: #000000;
  margin: 0;
}

/*Product Rating  */

/* The most important information about the product */
#containerAnnonce .product-details > p {
  font-family: "Farsan", cursive;
  text-align: center;
  font-size: 20px;
  color: #7d7d7d;
}

.information {
  color: #464646;
}

/* control */

.control {
  width: 100%;
  text-align: end;
}
/* the Button */
.btnAnnonce {
  transform: translateY(0px);
  transition: 0.3s linear;
  background: #2591cc;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: #eee;
  padding: 0;
  margin: 0;
}

.btnAnnonce:hover {
  transform: translateY(-4px);
}

.btnAnnonce span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
}
/* shopping cart icon */

/* buy */
.btnAnnonce .buy {
  z-index: 3;
  font-weight: bolder;
}

/* product image  */
.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 50%;
  display: inline-block;
}

#containerAnnonce img {
  width: 100%;
        height: 400px;
    object-fit: cover;
    @media screen and (min-width:1200px) {
                height: 320px;

    }

}

.infoDiv {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Farsan", cursive;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.9;
  text-align: left;
  font-size: 120%;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.infoDiv h2 {
  text-align: center;
}
.product-image:hover .infoDiv {
  top: 0;
  left: 100%;
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}

/* CONTAINERS */
.gridCardsMain {
  margin: auto;
  max-width: 380px;
  min-width: 85%;
}
.cardSection {
  border-radius: 30px;
  background: #fff;
  border-radius: 0.25em;
  padding: 20px 0;

  -webkit-box-shadow: 0px 0px 22px 0px rgba(231, 231, 231, 0.877);
  box-shadow: 0px 0px 22px 0px rgba(231, 231, 231, 0.877);
  margin: 1.5em;
  overflow: hidden;
}

.cardSection:hover {
  -webkit-box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.397);
  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.397);
}
.figureCard {
  height: 22em;
}
.articleCard {
  padding: 0;
  margin: 0;
}

/* IMAGE */
.imgCardAnnonce {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

/* TYPOGRAPHY */
.cardAnnonceTitle {
  letter-spacing: -0.05em;
  line-height: 1;
  margin: 0.25em 0;
}
.paraghAnnonce {
  line-height: 1.4;
}
.spanAnnonceCard {
  color: #bbb;
  font-weight: bold;
  font-size: 0.65em;
  text-transform: uppercase;
  word-spacing: 0.0625em;
  padding: 0;
}

.cardContent {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  text-align: center;
  font-size: 22px;
}

.gridCardsMain {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 1.5em;
  justify-content: center;
  align-items: center;
}

@supports (display: grid) {
  @media only screen and (min-width: 1100px) {
    .annoncesStep {
      justify-content: center;
      display: flex;
    }
  }
}

.topDivCardAnnonce {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
}
.bottomDivCardAnnonce {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 88%;
}

.bottomDivCardAnnonceP {
  color: rgb(228, 94, 94);
  font-weight: bold;
  font-size: 18px;
}

.contentCardAnnonce {
  display: flex;
  flex-direction: column;

  margin: 20px 0;
}

.btnAnnonce .priceDashboard {
  background-color: rgb(68, 68, 68);
}



@media only screen and (max-width: 700px) {

.annoncesStep .ulTopSideBar {
    color: #464646;
    font-size: 14px;
}
}



@media only screen and (max-width: 570px) {

.annoncesStep .ulTopSideBar {

}
.annoncesStep .ulTopSideBar li {
    text-align: center;
    width: 50%;
    label{
        display: none;
    }
}

.annoncesStep .selectSortBy {
    width: 80%;
    }
}

@media only screen and (max-width: 1200px) {
  #containerAnnonce {
        height: 320px;

  }
}


@media only screen and (max-width: 1150px) {

  #containerAnnonce {
    width: 70vw;
  }
}

@media only screen and (max-width: 550px) {

  .information {
    color: #464646;
    font-size: 14px;
}
}

@media only screen and (max-width: 850px) {
  .product-image {
    width: 100%;
  }

  .product-details {
    width: 100%;
  }

  #containerAnnonce {
    width: 90vw;
    display: flex;
    flex-direction: column-reverse;
    height: 507px;
}
#containerAnnonce .multi-button {
   bottom: 5%;
    left: 0px;
        justify-content: flex-end;

}
}
</style>


<style lang="scss">
.annoncesStep {
  li {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .form-search {
    margin: 0 auto;
    text-align: center;

    font: bold 13px sans-serif;
    max-width: 70%;
    position: relative;
  }

  .form-search input {
    width: 100%;
    box-sizing: border-box;

    background-color: #ffffff;
    box-shadow: 1px 2px 4px 0 rgba(161, 161, 161, 0.315);
    padding: 10px 20px;
    border: 1px solid #b6c3cd;
    color: #4e565c;
    outline: none;
    -webkit-appearance: none;
    border-radius: 3px;
  }

  .form-search button {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    background-color: #6caee0;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
    color: #ffffff;
    padding: 15px 22px;
    margin-left: -4px;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .form-search i {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 16px;
    color: #80a3bd;
  }

  .resultCount {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    width: 100%;
    h3 {
      padding: 0px;
      font-size: 25px;
    }
  }

  .noResultssvgDiv {
    display: block;
    text-align: center;
    padding: 107px 0px;
    min-width: 100vw;
    img {
      width: 30vw;
      cursor: pointer;
      margin: 50px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .selectSortBy {
    width: 50%;
    border: none;
    background-color: rgba(110, 110, 110, 0.09);
    text-align: center;
    border-radius: 5px;
    margin-left: 20px;
    cursor: pointer;
  }

  .ulTopSideBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;


    height: 100%;
    li {
      text-align: center;
      width: 100%;
    }
  }

  .containerCards {
    margin: 0;
    margin-top: 40px;
  }

  .containerCardsAux {
    width: 100vw;
    display: grid;
    padding: 51px;
    padding-top: 51px;
    padding-top: 0;
    grid-template-columns: 33% 33% 33%;
    margin: 22px auto;
  }

  @media screen and (max-width: 1050px) {
    .containerCardsAux {
      width: 100%;
      display: flex;
      padding: 51px;
      padding-top: 51px;
      padding-top: 0;
      flex-direction: column;
      margin: 22px auto;
      justify-content: center;
      align-items: center;
    }
  }

  .sidebar {
    position: fixed;
    width: 25%;
    height: 100vh;
    background: #312450;
    font-size: 0.45em;
  }

  .boxAux {
    width: 90%;

    margin-bottom: 50px;
    .bottom {
      position: relative;
    }
  }
}
.filtersDiv {
  margin: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.17);
}

.rowNotification {
  margin: auto;
  padding: 30px;
  width: 80%;
  display: flex;
  flex-flow: column;
  .card {
    width: 100%;
    margin-bottom: 20px;
    display: block;
    transition: opacity 0.3s;
    border: none;
    padding: 4px;
    border-radius: 10px;
  }

  .cardReadStateTrue {
    background: rgb(214, 234, 251);
  }
  .cardReadStateFalse {
    background: rgb(246, 246, 246);
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

.card-title:before {
  display: inline-block;
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  font-size: 1.1rem;
  text-align: center;
  border: 2px solid grey;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  padding-bottom: 3px;
  margin-right: 10px;
}

.notification-warning {
  .card-body {
    .card-title:before {
      color: #ffe082;
      border-color: #ffe082;
      content: "\f071";
    }
  }
}

.card.display-none {
  display: none;
  transition: opacity 2s;
}

.big-heading {
  color: rgb(39, 39, 39);
  text-align: center;
  font-size: 26pt;
  padding: 20px;
  //
}

.tableReservation {
  background: #fbfbfb;
  width: 27%;
  height: auto;
  display: block;
  float: left;
  position: relative;
  left: 6%;
  margin: 20px;
  margin-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    -webkit-transform: translateY(-2%);
    transform: translateY(-2%);
    -moz-box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.2);
  }
  .heading {
    background: #f0f4f2;
    width: 100%;
    padding: 20px;
    text-align: left;
    font-size: 15pt;
    color: #272625;
    margin-bottom: 40px;
  }
  .block {
    display: block;
    width: 78%;
    margin: 40px 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    .priceDashboard {
      float: right;
      position: relative;
      right: 30px;
      sub {
        position: absolute;
        right: -23px;
        top: 19px;
        font-weight: lighter;
        font-size: 9pt;
      }
    }
    .options {
      display: block;
      list-style: none;
      margin: 10px auto;
      li {
        font-size: 13px;
        color: #676462;
      }
    }
  }
  .btn {
    cursor: default;
    display: block;
    margin: 20px auto 30px;
    width: 60%;
    height: 50px;
    background: #abc3ee;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;

    overflow: hidden;
    p {
      font-weight: bolder;
      color: #fff;
      font-size: 10pt;
      text-align: center;
      line-height: 50px;
      font-family: "Poppins", sans-serif;
      text-transform: uppercase;
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-transition: all 600ms cubic-bezier(1, 0, 0, 1);
      transition: all 600ms cubic-bezier(1, 0, 0, 1);
    }
    span {
      font-size: 20px;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
      position: relative;
      top: -35px;
      left: -100%;
      color: #fff;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
}
p {
  text-align: left;
  color: #272625;
  font-weight: 600;
  font-size: 15px;

  display: contents;
}

@media only screen and (max-width: 1250px) {
  .table {
    width: 40%;
  }
}

@media only screen and (max-width: 990px) {
  .table {
    width: 80%;
  }
}

.messagesStep {
  .input-group-text {
    display: block;
  }

  .topBarChat {
    display: flex;
  }

  .card {
    background: #fff;
    transition: 0.5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: 0.55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
    height: 700px;

    padding-top: 0;
    display: grid;
    grid-template-columns: 22% 78%;
  }
  .chat-app .people-list {
    width: 21%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    z-index: 7;
    overflow-y: auto;
    height: 100%;
    max-height: 100%;

    border-bottom: 0;
  }

  .people-list {
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: white;
    margin-bottom: 2px;
  }

  .people-list .chat-list li:hover {
    background: #f0f0f0;
    cursor: pointer;
  }

  .people-list .chat-list li.active {
    background: #f0f0f0;
  }

  .people-list .chat-list li .name {
    font-size: 15px;
    margin: 10px 0;
    margin: 5px 0;
  }

  .people-list .chat-list img {
    width: 45px;
    border-radius: 50%;
  }

  .people-list img {
    float: left;
    border-radius: 50%;
  }

  .people-list .about {
    float: left;
    padding-left: 8px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
  }

  .people-list .status {
    color: #999;
    font-size: 13px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 12px;
  }

  .chat .chat-header {
    padding: 15px 20px;

    border-bottom: 0;
  }

  .chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px;
    margin-right: 10px;
  }

  .chat .chat-header .chat-about {
    float: left;
    padding-left: 10px;
  }

  .chat .chat-history {
    padding: 20px;

    border-bottom: 0;

    ul {
      height: 515px;
      overflow-y: scroll;
      overscroll-behavior-y: contain;
      scroll-snap-type: y proximity;
      overflow-x: hidden;
      display: flex;
      flex-direction: column-reverse;
    }
    ul:last-child {
      scroll-snap-align: start;
    }

    .messageOtherDiv {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
    }
  }

  .chat .chat-history ul {
    padding: 0;
  }

  .chat .chat-history ul li {
    list-style: none;
    margin-bottom: 30px;
  }

  .chat .chat-history ul li:last-child {
    margin-bottom: 0px;
  }

  .chat .chat-history .message-data {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  .chat .chat-history .message-data img {
    border-radius: 40px;
    width: 40px;
    margin-left: 10px;
  }

  .chat .chat-history .message-data-time {
    color: #434651;
    padding-left: 6px;
  }

  .chat .chat-history .message {
    color: #444;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    display: inline-block;
    position: relative;
    max-width: 75%;
  }

  .chat .chat-history .message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  }

  .chat .chat-history .my-message {
    background: #efefef;
    margin: 10px;
  }

  .chat .chat-history .my-message:after {
    bottom: 100%;
    left: 30px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #efefef;
    border-width: 10px;
    margin-left: -10px;
  }

  .chat .chat-history .other-message {
    background: #34b0f4b8;
    text-align: right;
    color: white;
    margin: 10px;
  }

  .chat .chat-history .other-message:after {
    border-bottom-color: #e8f1f3;
    left: 93%;
  }

  .chat .chat-message {
    padding: 20px;

    border-bottom: 0;
    border-top: 0;
  }

  .online,
  .offline,
  .me {
    margin-right: 2px;
    font-size: 8px;
    vertical-align: middle;
  }

  .online {
    color: #86c541;
  }

  .offline {
    color: #e47297;
  }

  .me {
    color: #1d8ecd;
  }

  .float-right {
    float: right;
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  @media only screen and (max-width: 767px) {
    .chat-app .people-list {
      height: 465px;
      width: 100%;
      overflow-x: auto;
      background: #fff;
      left: -400px;
      display: none;
    }
    .chat-app .people-list.open {
      left: 0;
    }
    .chat-app .chat {
      margin: 0;
    }
    .chat-app .chat .chat-header {
      border-radius: 0.55rem 0.55rem 0 0;
    }
    .chat-app .chat-history {
      height: 300px;
      overflow-x: auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat-app .chat-list {
      height: 650px;
      overflow-x: auto;
    }
    .chat-app .chat-history {
      height: 600px;
      overflow-x: auto;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-app .chat-list {
      height: 480px;
      overflow-x: auto;
    }
    .chat-app .chat-history {
      height: calc(100vh - 350px);
      overflow-x: auto;
    }
  }
}

// .messagesStep {
//   #messagesStepContainer {
//     width: 100%;
//     height: 700px;
//     background: #f8f8f8;
//     margin: 0 auto;
//     font-size: 0;
//     border-radius: 5px;
//     overflow: hidden;
//   }
//   aside {
//     width: 25%;
//     height: 700px;
//     background-color: #f8f8f8;
//     display: inline-block;
//     font-size: 15px;
//     vertical-align: top;
//   }
//   main {
//     width: 75%;
//     height: 660px;
//     display: inline-block;
//     font-size: 15px;
//     vertical-align: top;
//   }

//   aside ul {
//     padding-left: 0;
//     margin: 0;
//     list-style-type: none;
//     overflow-y: scroll;
//     height: 690px;
//   }
//   aside li {
//     padding: 14px 0;
//     text-align: center;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     background-color: #f3f3f3;
//     color: black;
//     padding-left: 7vw;
//   }
//   aside li:hover {
//     background-color: #ececec;
//     cursor: pointer;
//   }
//   h2 {
//     margin: 0;
//   }
//   aside li i {
//     font-size: 20px;
//     margin-right: 10px;
//   }
//   aside li div {
//     display: inline-block;
//     vertical-align: top;
//     margin-top: 12px;
//   }
//   aside li h2 {
//     color: rgb(34, 32, 32);
//     font-weight: normal;
//     margin-bottom: 5px;
//     font-weight: bold;
//     font-size: 20px;
//   }
//   aside li h3 {
//     font-size: 12px;
//     color: #0030be;
//     font-weight: normal;
//   }

//   .status {
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     display: inline-block;
//     margin-right: 7px;
//   }
//   .green {
//     background-color: #58b666;
//   }

//   main header {
//     height: 110px;
//     padding: 30px 20px 30px 40px;
//   }
//   main header > * {
//     display: inline-block;
//     vertical-align: top;
//   }
//   main header img:first-child {
//     border-radius: 50%;
//   }
//   main header img:last-child {
//     width: 24px;
//     margin-top: 8px;
//   }
//   main header div {
//     margin-left: 10px;
//     margin-right: 145px;
//   }
//   main header h2 {
//     font-size: 16px;
//     margin-bottom: 5px;
//   }
//   main header h3 {
//     font-size: 14px;
//     font-weight: normal;
//     color: #7e818a;
//   }

//   #chat {
//     padding-left: 0;
//     margin: 0;
//     list-style-type: none;
//     overflow-y: scroll;
//     border-top: 2px solid #fff;
//     justify-content: flex-end;
//     align-items: end;
//     height: 90%;
//     flex-direction: column;
//   }
//   #chat li {
//     padding: 10px 30px;
//     display: flex;
//     justify-content: center;
//     align-items: end;
//     flex-direction: column;
//     margin: 40px 0;
//   }
//   #chat h2,
//   #chat h3 {
//     display: contents;
//     font-size: 13px;
//     font-weight: normal;
//     color: rgb(19, 17, 17);
//   }
//   #chat h3 {
//     color: rgb(231, 62, 62);
//   }
//   #chat .entete {
//     margin-bottom: 5px;
//     width: 100%;
//     display: flex;
//     text-align: left;
//     justify-content: flex-end;
//     align-items: flex-start;
//   }
//   #chat .message {
//     padding: 20px;
//     color: #fff;
//     line-height: 25px;
//     max-width: 90%;
//     display: inline-block;
//     text-align: left;
//     border-radius: 48px;
//   }
//   #chat .you .message {
//     background-color: cornflowerblue;
//     font-weight: bold;
//   }

//   .liMessageStepActive {
//     background-color: rgb(224, 224, 224);
//   }
// }

.statusRed {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}

.red {
  background-color: #459ff3;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
}

.avatarNotification {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
}

.chatMessageCountRelative {
  position: relative;
}
.chatMessageCount {
  background-color: #2591cc;
  padding: 0px 7px;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: 50%;
  right: 10px;
  font-size: 14px;
}
</style>
