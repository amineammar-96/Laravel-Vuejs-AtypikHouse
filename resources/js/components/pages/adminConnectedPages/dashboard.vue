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
              @click="windowStepFunction(3) && changeNotificationReadingState()"
              :class="windowStep == 3 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-bell sideBarLinkIcon"></i>
              <span>Notifications</span
              ><span v-if="newNotificationsCheck" class="red statusRed"></span>
            </li>

            <li
              @click="windowStepFunction(7)"
              :class="windowStep == 7 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-digital-tachograph sideBarLinkIcon"></i>

              <span>Annonces</span>
            </li>

            <li
              @click="windowStepFunction(8)"
              :class="windowStep == 8 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-cogs sideBarLinkIcon"></i>
              <span>Gestion des logements</span>
            </li>

            <li
              @click="windowStepFunction(10)"
              :class="windowStep == 10 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-clock sideBarLinkIcon"></i>
              <span>Historiques</span>
            </li>

            <li
              @click="windowStepFunction(4)"
              :class="windowStep == 4 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-users sideBarLinkIcon"></i>
              <span>Administrateurs</span>
            </li>
            <li
              @click="windowStepFunction(11)"
              :class="windowStep == 11 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-users sideBarLinkIcon"></i>
              <span>modérateurs</span>
            </li>
            <li
              @click="windowStepFunction(5)"
              :class="windowStep == 5 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-users sideBarLinkIcon"></i>

              <span>Propriétaires</span>
            </li>
            <li
              @click="windowStepFunction(6)"
              :class="windowStep == 6 ? 'sideBarLinkActive' : ''"
              class="sideBarLink"
            >
              <i class="fas fa-users sideBarLinkIcon"></i>

              <span>Clients</span>
            </li>
          </ul>
        </div>

        <div class="leftSideBarDashboardMobile">
          <div class="expand-collapse">
            <img
            alt="coollaapseeIcccooon"
              src="https://img.icons8.com/material-sharp/40/FFFFFF/circled-menu.png"
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
                  @click="
                    windowStepFunction(3) && changeNotificationReadingState()
                  "
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
                  @click="windowStepFunction(7)"
                  :class="windowStep == 7 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-digital-tachograph sideBarLinkIcon"></i>

                  <span>Annonces</span>
                </li>

                <li
                  @click="windowStepFunction(8)"
                  :class="windowStep == 8 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-cogs sideBarLinkIcon"></i>
                  <span>Propriétés logement</span>
                </li>

                <li
                  @click="windowStepFunction(10)"
                  :class="windowStep == 10 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-clock sideBarLinkIcon"></i>
                  <span>Historiques</span>
                </li>

                <li
                  @click="windowStepFunction(4)"
                  :class="windowStep == 4 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-users sideBarLinkIcon"></i>
                  <span>Administrateurs</span>
                </li>
                <li
                  @click="windowStepFunction(11)"
                  :class="windowStep == 11 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-users sideBarLinkIcon"></i>
                  <span>modérateurs</span>
                </li>
                <li
                  @click="windowStepFunction(5)"
                  :class="windowStep == 5 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-users sideBarLinkIcon"></i>

                  <span>Propriétaires</span>
                </li>
                <li
                  @click="windowStepFunction(6)"
                  :class="windowStep == 6 ? 'sideBarLinkActive' : ''"
                  class="sideBarLink"
                >
                  <i class="fas fa-users sideBarLinkIcon"></i>

                  <span>Clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="rightSideDashboard">
          <!-- Dashboard  -->
          <div v-if="windowStep == 1" class="dashboardStep">
            <section>
              <dl>
                <dt>Visiteurs</dt>
                <dd>69</dd>
              </dl>
              <dl>
                <dt>Annonces</dt>
                <dd>96</dd>
              </dl>
              <dl>
                <dt>Réservations</dt>
                <dd>66</dd>
              </dl>
              <dl>
                <dt>Bénéfice</dt>
                <dd>99</dd>
              </dl>
            </section>
          </div>

          <!-- Notifications -->
          <div v-if="windowStep == 3" class="NotificationsStep">
            <div
              v-if="notifications.length > 0"
              class="rowNotification notification-container"
            >
              <p class="dismiss text-right">
                <a id="dismiss-all">Notifications</a>
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
                            alt="profile image avatar"
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
                          class="dismiss-notification"
                          @click="deleteNotification(notification.id)"
                        >
                          <i class="fas fa-trash"></i>
                        </a>

                        <router-link :to="notification.link">
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
                alt="aucun noti"
              />
            </div>
          </div>

          <!-- AdminsManagement -->
          <div v-if="windowStep == 4" class="adminsStep">
            <!-- <h1 style="color: black; margin-left: 26px">
              Gérez les administrateurs ( {{ admins.length }} )
            </h1> -->

            <h1 style="color: black; margin: 26px">
              Gérez les administrateurs ( {{ admins.length }} )
            </h1>
            <div>
              <div class="">
                <div class="container">
                  <div class="card" style="border: none">
                    <div class="table-responsive">
                      <table class="table table-hover table-nowrap">
                        <thead class="" style="background: #e3f5ff">
                          <tr>
                            <th style="border: none" scope="col">Avatar</th>
                            <th style="border: none" scope="col">Nom</th>
                            <th style="border: none" scope="col">E-mail</th>
                            <th style="border: none" scope="col">Télephone</th>
                            <th style="border: none" scope="col">Compte</th>
                            <th style="border: none" scope="col">
                              <a
                                @click="resetFormValues()"
                                data-bs-toggle="modal"
                                data-bs-target="#addAdmin"
                                ><i
                                  style="
                                    font-size: 23px;
                                    cursor: pointer;
                                    color: #20c997;
                                  "
                                  class="fas fa-plus-circle"
                                ></i
                              ></a>
                              <span style="display:none;">xxxxx</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style="width: 20%"
                            v-for="(adminAux, key) in admins"
                            :key="key"
                          >
                            <td data-label="Job Title">
                              <img
                                v-if="adminAux.user_avatar"
                                :src="
                                  '/storage/' +
                                  adminAux.user_avatar.path +
                                  '/' +
                                  adminAux.user_avatar.name
                                "
                                class="avatar avatar-sm rounded-circle me-2"
                                :alt="adminAux.id+'-'+adminAux.email"
                              />
                              <img
                                class="avatar avatar-sm rounded-circle me-2"
                                v-if="!adminAux.user_avatar"
                                src="../../../../../public/images/avatar.png"
                                :alt="adminAux.id+'-'+adminAux.email"

                              />
                            </td>
                            <td>
                              <a class="text-heading font-semibold" href="#">
                                {{ adminAux.lastname }} {{ adminAux.firstname }}
                              </a>
                            </td>
                            <td>
                              <span>{{ adminAux.email }}</span>
                            </td>

                            <td data-label="Lead Score">
                              <a
                                v-if="adminAux.user_info"
                                class="text-current"
                                :href="'tel:' + adminAux.user_info.phone"
                              >
                                {{ adminAux.user_info.phone }}
                              </a>
                            </td>
                            <td data-label="Company">
                              <span
                                v-if="adminAux.email_verified_at"
                                class="text-success"
                                >Vérifié</span
                              >

                              <span v-else class="text-danger"
                                >Non vérifié</span
                              >
                            </td>
                            <td data-label="">
                              <a
                                style="cursor: pointer"
                                class="text-current"
                                @click="getAdminIdToDelete(adminAux.id)"
                                ><i class="fas fa-trash"></i
                              ></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--
            <div class="con" style="padding: 5px 5px">
              <div class="userCardProfileDashboard">
                <div
                  class="userCardProfileDashboardCard"
                  v-for="(adminAux, key) in admins"
                  :key="key"
                >
                  <div class="cover-photo">
                    <img
                      v-if="adminAux.user_avatar"
                      :src="
                        '/storage/' +
                        adminAux.user_avatar.path +
                        '/' +
                        adminAux.user_avatar.name
                      "
                    />
                    <img
                      v-if="!adminAux.user_avatar"
                      src="../../../../../public/images/avatar.png"
                    />
                  </div>
                  <h3 class="userCardProfileDashboardName">
                    {{ adminAux.lastname }} {{ adminAux.firstname }}
                  </h3>
                  <p
                    v-if="adminAux.user_info"
                    class="userCardProfileDashboardAbout"
                  >
                    Informations <br />

                    {{ adminAux.user_info.address }}
                    <span v-if="adminAux.user_info.compAddress">
                      <br />
                      {{ adminAux.user_info.compAddress }}</span
                    >
                    <br />
                    {{ adminAux.user_info.city }}
                    {{ adminAux.user_info.postalCode }}
                    <br />
                    {{ adminAux.user_info.country }} <br />
                    <br />

                    Contact <br />
                    {{ adminAux.email }} <br />
                    {{ adminAux.user_info.phone }}
                  </p>

                  <p
                    v-if="!adminAux.user_info"
                    class="userCardProfileDashboardAbout"
                  >
                    Contact <br />

                    {{ adminAux.email }} <br />
                  </p>

                  <span
                    @click="getAdminIdToDelete(adminAux.id)"
                    class="userCardProfileDashboardBtn"
                  >
                    Supprimer
                  </span>
                  <div class="userCardProfileDashboardIcons">
                    <a
                      v-if="adminAux.user_info"
                      :href="'tel:' + adminAux.user_info.phone"
                      ><i class="fas fa-phone-alt"></i>
                    </a>
                    <a :href="'mailto:' + adminAux.email"
                      ><i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    height: 33vw;
                  "
                >
                  <a
                    @click="resetFormValues()"
                    data-bs-toggle="modal"
                    data-bs-target="#addAdmin"
                    ><i
                      style="font-size: 33px; cursor: pointer; color: #20c997"
                      class="fas fa-plus-circle"
                    ></i
                  ></a>
                </div>
              </div>
            </div> -->

            <div id="addAdmin" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content addModalDiv">
                  <form>
                    <div class="modal-header">
                      <h2 class="modal-title">Nouveau administrateur</h2
                      >
                      <button
                        type="button"
                        class="close"
                        data-bs-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <label for="name">Nom</label>
                        <input
                          :class="hasError('lastname') ? 'is-invalid' : ''"
                          type="text"
                          v-model="admin.lastname"
                          class="form-control"
                          required
                          id="name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="firstname">Prénom</label>
                        <input
                          type="text"
                          :class="hasError('firstname') ? 'is-invalid' : ''"
                          v-model="admin.firstname"
                          class="form-control"
                          required
                          id="firstname"
                        />
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          :class="hasError('email') ? 'is-invalid' : ''"
                          v-model="admin.email"
                          class="form-control"
                          required
                                                    id="email"

                        />
                      </div>

                      <div class="form-group mdpFormGroupe">
                        <label for="mdp">Mot de passe</label>
                        <input
                          type="password"
                          :class="hasError('password') ? 'is-invalid' : ''"
                          v-model="admin.password"
                          class="form-control"
                          name="mdp"
                          id="mdp"
                          placeholder=""
                        />
                      </div>

                      <div class="form-group mdpFormGroupe">
                        <label for="mdpAux">Répetez le mot de passe </label>
                        <input
                          type="password"
                          :class="hasError('password') ? 'is-invalid' : ''"
                          v-model="admin.password_confirmation"
                          class="form-control"
                          name="mdp"
                          id="mdpAux"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div class="modal-footer">
                      <input
                        type="button"
                        class="btn btn-default"
                        data-bs-dismiss="modal"
                        value="Annuler"
                        style="background-color: #e2e2e2"
                      />
                      <input
                        style="background-color: #212529"
                        type="button"
                        class="btn btn-success"
                        value="Ajouter"
                        @click="addAdmin()"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- ////////sdqsd -->

          <div v-if="windowStep == 11" class="moderateurStep">
            <h1 style="color: black; margin: 26px">
              Gérez les modérateurs ( {{ moderateurs.length }} )
            </h1>
            <div>
              <div class="">
                <div class="container">
                  <div class="card" style="border: none">
                    <div class="table-responsive">
                      <table class="table table-hover table-nowrap">
                        <thead class="" style="background: #e3f5ff">
                          <tr>
                            <th style="border: none" scope="col">Avatar</th>
                            <th style="border: none" scope="col">Nom</th>
                            <th style="border: none" scope="col">E-mail</th>
                            <th style="border: none" scope="col">Télephone</th>
                            <th style="border: none" scope="col">Compte</th>
                            <th style="border: none" scope="col">
                              <a
                                @click="resetFormValues()"
                                data-bs-toggle="modal"
                                data-bs-target="#addModerateur"
                                ><i
                                  style="
                                    font-size: 23px;
                                    cursor: pointer;
                                    color: #20c997;
                                  "
                                  class="fas fa-plus-circle"
                                ></i
                              ></a>
                                                            <span style="display:none;">xxxxx</span>

                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style="width: 20%"
                            v-for="(adminAux, key) in moderateurs"
                            :key="key"
                          >
                            <td data-label="Job Title">
                              <img
                                v-if="adminAux.user_avatar"
                                :src="
                                  '/storage/' +
                                  adminAux.user_avatar.path +
                                  '/' +
                                  adminAux.user_avatar.name

                                "
                                                                :alt="adminAux.id+'-'+adminAux.email"

                                class="avatar avatar-sm rounded-circle me-2"
                              />
                              <img
                                class="avatar avatar-sm rounded-circle me-2"
                                v-if="!adminAux.user_avatar"
                                src="../../../../../public/images/avatar.png"
                                :alt="adminAux.id+'-'+adminAux.email"
                              />
                            </td>
                            <td>
                              <a class="text-heading font-semibold" href="#">
                                {{ adminAux.lastname }} {{ adminAux.firstname }}
                              </a>
                            </td>
                            <td>
                              <span>{{ adminAux.email }}</span>
                            </td>

                            <td data-label="Lead Score">
                              <a
                                v-if="adminAux.user_info"
                                class="text-current"
                                :href="'tel:' + adminAux.user_info.phone"
                              >
                                {{ adminAux.user_info.phone }}
                              </a>
                            </td>
                            <td data-label="Company">
                              <span
                                v-if="adminAux.email_verified_at"
                                class="text-success"
                                >Vérifié</span
                              >

                              <span v-else class="text-danger"
                                >Non vérifié</span
                              >
                            </td>
                            <td data-label="">
                              <a
                                style="cursor: pointer"
                                class="text-current"
                                @click="getModerateurIdToDelete(adminAux.id)"
                                ><i class="fas fa-trash"></i
                              ></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Edit Modal HTML -->
            <div id="addModerateur" class="modal fade">
              <div class="modal-dialog">
                <div class="modal-content addModalDiv">
                  <form>
                    <div class="modal-header">
                      <h2 class="modal-title">Nouveau moderateur</h2>
                      <button
                        type="button"
                        class="close"
                        data-bs-dismiss="modal"
                        aria-hidden="true"
                      >
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <label  for="name">Nom</label>
                        <input
                          :class="
                            hasErrorModerateur('lastname') ? 'is-invalid' : ''
                          "
                          type="text"
                          v-model="moderateur.lastname"
                          class="form-control"
                          required
                          id="name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="firstname">Prénom</label>
                        <input
                          type="text"
                          :class="
                            hasErrorModerateur('firstname') ? 'is-invalid' : ''
                          "
                          v-model="moderateur.firstname"
                          class="form-control"
                          required
                          id='firstname'
                        />
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          :class="
                            hasErrorModerateur('email') ? 'is-invalid' : ''
                          "
                          v-model="moderateur.email"
                          class="form-control"
                          required
                          id="email"
                        />
                      </div>

                      <div class="form-group mdpFormGroupe">
                        <label for="mdp1">Mot de passe</label>
                        <input
                          type="password"
                          :class="
                            hasErrorModerateur('password') ? 'is-invalid' : ''
                          "
                          v-model="moderateur.password"
                          class="form-control"
                          name="mdp"
                          id="mdp1"
                          placeholder=""
                        />
                      </div>

                      <div class="form-group mdpFormGroupe">
                        <label for="mdp2">Répetez le mot de passe </label>
                        <input
                          type="password"
                          :class="
                            hasErrorModerateur('password') ? 'is-invalid' : ''
                          "
                          v-model="moderateur.password_confirmation"
                          class="form-control"
                          name="mdp"
                          id="mdp2"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div class="modal-footer">
                      <input
                        type="button"
                        class="btn btn-default"
                        data-bs-dismiss="modal"
                        value="Annuler"
                      />
                      <input
                        type="button"
                        class="btn btn-success"
                        value="Ajouter"
                        @click="addModerateur()"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- OwnersManagement -->
          <div v-if="windowStep == 5" class="proprietaireStep">

             <h1 style="color: black; margin: 26px">
              Gérez les propriétaires ( {{ owners.length }} )
            </h1>
            <div>
              <div class="">
                <div class="container">
                  <div class="card" style="border: none">
                    <div class="table-responsive">
                      <table class="table table-hover table-nowrap">
                        <thead class="" style="background: #e3f5ff">
                          <tr>
                            <th style="border: none" scope="col">Avatar</th>
                            <th style="border: none" scope="col">Nom</th>
                            <th style="border: none" scope="col">E-mail</th>
                            <th style="border: none" scope="col">Télephone</th>
                            <th style="border: none" scope="col">Compte</th>
                            <th style="border: none" scope="col">

                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style="width: 20%"
                            v-for="(adminAux, key) in owners"
                            :key="key"
                          >
                            <td data-label="Job Title">
                              <img
                                v-if="adminAux.user_avatar"
                                :src="
                                  '/storage/' +
                                  adminAux.user_avatar.path +
                                  '/' +
                                  adminAux.user_avatar.name
                                "
                                class="avatar avatar-sm rounded-circle me-2"
                                :alt="adminAux.id+'-'+adminAux.email"
                              />
                              <img
                                class="avatar avatar-sm rounded-circle me-2"
                                v-if="!adminAux.user_avatar"
                                src="../../../../../public/images/avatar.png"
                                :alt="adminAux.id+'-'+adminAux.email"
                              />
                            </td>
                            <td>
                              <a class="text-heading font-semibold" href="#">
                                {{ adminAux.lastname }} {{ adminAux.firstname }}
                              </a>
                            </td>
                            <td>
                              <span>{{ adminAux.email }}</span>
                            </td>

                            <td data-label="Lead Score">
                              <a
                                v-if="adminAux.user_info"
                                class="text-current"
                                :href="'tel:' + adminAux.user_info.phone"
                              >
                                {{ adminAux.user_info.phone }}
                              </a>
                            </td>
                            <td data-label="Company">
                              <span
                                v-if="adminAux.email_verified_at"
                                class="text-success"
                                >Vérifié</span
                              >

                              <span v-else class="text-danger"
                                >Non vérifié</span
                              >
                            </td>
                            <td data-label="">

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <!-- ClientsManagament -->
          <div v-if="windowStep == 6" class="clientsStep">

             <h1 style="color: black; margin: 26px">
              Gérez les clients ( {{ clients.length }} )
            </h1>
            <div>
              <div class="">
                <div class="container">
                  <div class="card" style="border: none">
                    <div class="table-responsive">
                      <table class="table table-hover table-nowrap">
                        <thead class="" style="background: #e3f5ff">
                          <tr>
                            <th style="border: none" scope="col">Avatar</th>
                            <th style="border: none" scope="col">Nom</th>
                            <th style="border: none" scope="col">E-mail</th>
                            <th style="border: none" scope="col">Télephone</th>
                            <th style="border: none" scope="col">Compte</th>
                            <th style="border: none" scope="col">

                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style="width: 20%"
                            v-for="(adminAux, key) in clients"
                            :key="key"
                          >
                            <td data-label="Job Title">
                              <img
                                v-if="adminAux.user_avatar"
                                :src="
                                  '/storage/' +
                                  adminAux.user_avatar.path +
                                  '/' +
                                  adminAux.user_avatar.name
                                "
                                :alt="adminAux.id+'-'+adminAux.email"
                                class="avatar avatar-sm rounded-circle me-2"
                              />
                              <img
                                class="avatar avatar-sm rounded-circle me-2"
                                v-if="!adminAux.user_avatar"
                                src="../../../../../public/images/avatar.png"
                                :alt="adminAux.id+'-'+adminAux.email"
                              />
                            </td>
                            <td>
                              <a class="text-heading font-semibold" href="#">
                                {{ adminAux.lastname }} {{ adminAux.firstname }}
                              </a>
                            </td>
                            <td>
                              <span>{{ adminAux.email }}</span>
                            </td>

                            <td data-label="Lead Score">
                              <a
                                v-if="adminAux.user_info"
                                class="text-current"
                                :href="'tel:' + adminAux.user_info.phone"
                              >
                                {{ adminAux.user_info.phone }}
                              </a>
                            </td>
                            <td data-label="Company">
                              <span
                                v-if="adminAux.email_verified_at"
                                class="text-success"
                                >Vérifié</span
                              >

                              <span v-else class="text-danger"
                                >Non vérifié</span
                              >
                            </td>
                            <td data-label="">

                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>

          <!-- annonces -->
          <div v-if="windowStep == 7" class="annoncesStep">
            <div class="topBarAnnoncesFilter">
              <div class="filtersDiv">
                <ul class="ulTopSideBar">
                  <li>

                    <div class="form-search" method="get" action="#">
                     <label for="search" style="display:none;">xxccccccx</label>
                     <input
                        v-model="titreChFiltre"
                        type="search"
                        name="search"
                        placeholder="Filtrer par titre"
                        id="search"
                      />
                    </div>
                  </li>
                  <li>
                    <label for="sortFilterCat">Catégorie : </label>
                    <select
                      v-model="typeLogementCh"
                      class="selectSortBy"
                      name="sortFilter"
                      id="sortFilterCat"
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
                        <small
                          >({{ typeLogementCount(typeLogement.name) }})</small
                        >
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

                      <option value="priceDesc">
                        Prix : Ordre décroissant
                      </option>

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

              <div
                v-for="(userAnnonce, key) in sortedAnnonces"
                :key="key"
                id="containerAnnonce"
              >
                <div class="product-details">
                  <h3>
                    {{ userAnnonce.title }}
                  </h3>

                  <ul>
                    <li>
                      <p class="information">{{ userAnnonce.address }}</p>
                    </li>
                    <li v-if="userAnnonce.compAddress">
                      <p class="information">{{ userAnnonce.compAddress }}</p>
                    </li>
                    <li>
                      <p class="information">{{ userAnnonce.city }}</p>
                    </li>
                    <li>
                      <p class="information">{{ userAnnonce.postalCode }}</p>
                    </li>
                    <li>
                      <p class="information">{{ userAnnonce.country }}</p>
                    </li>
                  </ul>


<div class="multi-button">

  <router-link
  aria-label="first link"
                      :to="'/updateAnnonce/?annonce_id=' + userAnnonce.id"
                      >
                      <button aria-label="Edit button" title="Edit button" class="button" id="updateAnnonceBtn"><span aria-hidden="true" ><i class="fas fa-pen-fancy"></i></span></button>
</router-link>

 <router-link
 aria-label="second link"
                      style="text-decoration: none"
                      :to="'/annonce/?id=' + userAnnonce.id"
                      class="text-secondary"
                      @click="scrollToTop"
                    >
  <button aria-label="SHOW button" title="SHOW button" class="button" id="showAnnonceBtn"><span aria-hidden="true" ><i class="fas fa-eye"></i></span></button>
</router-link>


  <button                       @click="deleteAnnonce(userAnnonce.id)"
 class="button" aria-label="DELETE button" title="DELETE button" id="deleteAnnonceBtn"><span aria-hidden="true" ><i class="fas fa-trash"></i></span></button>
</div>


                  <!-- <div>
                    <router-link
                      target="_blank"
                      :to="'/updateAnnonce/?annonce_id=' + userAnnonce.id"
                      ><i
                        class="
                          fas
                          fa-edit
                          annoncesDashboardIcons
                          annoncesDashboardIconsEdit
                        "
                      ></i
                    ></router-link>

                    <i
                      @click="deleteAnnonce(userAnnonce.id)"
                      class="
                        fas
                        fa-trash
                        annoncesDashboardIcons
                        annoncesDashboardIconsDelete
                      "
                    ></i>
                  </div>

                  <div class="control">
                    <router-link
                      target="_blank"
                      style="text-decoration: none"
                      :to="'/annonce/?id=' + userAnnonce.id"
                      class="text-secondary"
                      @click="scrollToTop"
                    >
                      <button class="btnAnnonce">
                        <span class="priceDashboard"
                          >€ {{ userAnnonce.price }}</span
                        >
                        <span class="buy">Consulter</span>
                      </button>
                    </router-link>
                  </div> -->
                </div>

                <div class="product-image">
                  <img
                    v-if="userAnnonce.images[0]"
                    :src="
                      'storage/' +
                      userAnnonce.images[0].path +
                      '/' +
                      userAnnonce.images[0].image
                    "
                    :alt="userAnnonce.title+'-'+userAnnonce.id"
                  />

                  <div class="infoDiv">
                    <ul>
                      <li>
                        <strong>Surface: </strong>{{ userAnnonce.surface }} cm²
                      </li>
                      <li>
                        <strong>Nombre de couchages: </strong
                        >{{ userAnnonce.numberOfBeds }}
                      </li>
                      <li>
                        <strong>Capacité d'accueillement : </strong
                        >{{ userAnnonce.capacity }}
                      </li>
                      <li>
                        <strong> Animaux autorisés : </strong
                        >{{ userAnnonce.animaux }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="resultCount">
                <h3>
                  Affichage de {{ sortedAnnonces.length }} sur
                  {{ annonces.length }} résultats
                </h3>

                <button
                  v-show="
                    sortedAnnonces.length > 0 &&
                    annonces.length > sortedAnnonces.length
                  "
                  @click="showMoreAction"
                  class="btn btn-dark"
                >
                  Voir plus
                </button>
              </div>
            </main>
          </div>

          <div v-if="windowStep == 8" class="propretyStep">
          <h1>Gestion des logements</h1>
            <div class="propretyStepContainer">
              <div class="topBarProprety">
                <div class="topBarGrid">
                  <div
                    style="display: flex; flex-direction: column; width: 100%"
                  >
                    <span
                      style="
                      margin-top:40px;
                        padding: 0 35px;
                        font-size: 20px;
                        font-weight: bold;
                      "
                      >Differents types d'hébegement
                    </span>
                    <div id="tasks">
                      <div
                        v-show="typesLogement.length > 0"
                        v-for="(typeLogement, key) in typesLogement"
                        :key="key"
                        class="task"
                        @click="deleteTypeLogement(typeLogement.id, key)"
                      >
                        <span class="task-name">
                          {{ typeLogement.name }}
                        </span>
                      </div>
                      <div
                        class="task taskAux"
                        style="
                          justify-content: center;
                          border-bottom: none;
                          cursor: default;
                        "
                        v-if="typesLogement"
                      >
                        <span
                          style="
                            font-size: 25px;
                            color: #20c997;
                            cursor: pointer;
                          "
                          @click="addTypeLogement"
                          class="task-name"
                        >
                          <i class="fas fa-plus-circle"></i>
                        </span>
                      </div>
                      <div class="task" v-if="!typesLogement">
                        <span class="task-name"> Aucun type </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 style="padding: 0 35px; font-size: 25px; font-weight: bold">
                  Propriétés
                </h2>
                <div class="comparison">
                  <table>
                    <thead>
                      <tr>
                        <th d="tl tl2" ><span style="display:none;">xxxx</span></th>
                        <th
                          v-for="(typeLogement, key) in typesLogement"
                          :key="key"
                          class="product productTh"
                        >
                          {{ typeLogement.name }} <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(propretie, key) in propretiesArray"
                        :key="key"
                        class="compare-row"
                      >
                        <td @click="updateRequiredProprety(propretie.id)">
                          {{ propretie.name }}  (<span v-if=" propretie.unity ">{{ propretie.unity }}</span>) <br />
                          Obligatoire : {{ propretie.required }}
                        </td>

                        <td
                          @click="
                            updatePropretyTypeLogement(
                              propretie.id,
                              typeLogement.id,
                              propretie.name,
                            typeLogement.name,

                            )
                          "
                          class="tableCellsManagement"
                          v-for="(typeLogement, key) in typesLogement"
                          :key="key"
                        >
                          <img
                            v-if="
                              checkPropretySelectedType(
                                typeLogement.id,
                                propretie
                              )
                            "
                            :alt="typeLogement.id+'-'+propretie.name"
                            src="../../../../../public/images/checkTick.png"
                          />

                          <img
                                                      :alt="typeLogement.id+'-'+propretie.name"
                            v-else
                            src="../../../../../public/images/interdit.png"
                          />
                        </td>
                      </tr>

                      <tr
                        v-for="(propretie, key) in propretiesArray"
                        :key="key"
                      ></tr>
                    </tbody>
                  </table>

                  <div class="btnTableManagementDashBoard">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#addPropretyForm"
                      class="price-buy"
                      @click="managementAnnonceStep = 1"
                    >
                      Ajouter une nouvelle propriété<span
                        class="hide-mobile"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 style="padding: 0 35px; font-size: 25px; font-weight: bold">
                  Services
                </h2>
                <div class="comparison">
                  <table>
                    <thead>
                      <tr>
                        <th d="tl tl2" ><span style="display:none;">xxxx</span></th>
                        <th
                          v-for="(typeLogement, key) in typesLogement"
                          :key="key"
                          class="product productTh"
                        >
                          {{ typeLogement.name }} <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(service, key) in servicesArray"
                        :key="key"
                        class="compare-row"
                      >
                        <td>{{ service.name }}</td>

                        <td
                          @click="
                            updateServiceTypeLogement(
                              service.id,
                              typeLogement.id
                            )
                          "
                          class="tableCellsManagement"
                          v-for="(typeLogement, key) in typesLogement"
                          :key="key"
                        >
                          <img
                                                      :alt="typeLogement.id+'-'+service.name"

                            v-if="
                              checkServiceSelectedType(typeLogement.id, service)
                            "
                            src="../../../../../public/images/checkTick.png"
                          />

                          <img
                          :alt="typeLogement.id+'-'+service.name"
                            v-else
                            src="../../../../../public/images/interdit.png"
                          />
                        </td>
                      </tr>

                      <tr
                        v-for="(service, key) in servicesArray"
                        :key="key"
                      ></tr>
                    </tbody>
                  </table>
                  <div class="btnTableManagementDashBoard">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#addPropretyForm"
                      class="price-buy"
                      @click="managementAnnonceStep = 2"
                    >
                      Ajouter un nouveau service<span
                        class="hide-mobile"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 style="padding: 0 35px; font-size: 25px; font-weight: bold">
                  Options
                </h2>
                <div class="comparison">
                  <table>
                    <thead>
                      <tr>
                        <th d="tl tl2" ><span style="display:none;">xxxx</span></th>
                        <th
                          v-for="(typeLogement, key) in typesLogement"
                          :key="key"
                          class="product productTh"
                        >
                          {{ typeLogement.name }} <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(option, key) in optionsArray"
                        :key="key"
                        class="compare-row"
                      >
                        <td>{{ option.name }}</td>

                        <td
                          @click="
                            updateOptionTypeLogement(option.id, typeLogement.id)
                          "
                          class="tableCellsManagement"
                          v-for="(typeLogement, key) in typesLogement"
                          :key="key"
                        >
                          <img
                          :alt="typeLogement.id+'-'+service.option"
                            v-if="
                              checkOptionSelectedType(typeLogement.id, option)
                            "
                            src="../../../../../public/images/checkTick.png"
                          />

                          <img
                          :alt="typeLogement.id+'-'+option.name"
                            v-else
                            src="../../../../../public/images/interdit.png"
                          />
                        </td>
                      </tr>

                      <tr v-for="(option, key) in optionsArray" :key="key"></tr>
                    </tbody>
                  </table>
                  <div class="btnTableManagementDashBoard">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#addPropretyForm"
                      class="price-buy"
                      @click="managementAnnonceStep = 3"
                    >
                      Ajouter une nouvelle option<span
                        class="hide-mobile"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>





          <div v-if="windowStep == 10" class="historiqueReservations">
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="addPropretyForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addPropretyFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="border-radius: 50px">
          <div class="modal-body">

            <div
              class="row rowDivContact"
              style="display: flex; justify-content: center"
            >
              <div class="contactCardDiv">
                <div class="contact_inner">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="contact_form_inner">
                        <div class="contact_field contact_fieldAux">
                          <form @submit.prevent="submitAddForm">
                            <h6 v-if="managementAnnonceStep == 1">
                              Ajouter une nouvelle propriété
                            </h6>
                            <h6 v-if="managementAnnonceStep == 2">
                              Ajouter un nouveau service
                            </h6>
                            <h6 v-if="managementAnnonceStep == 3">
                              Ajouter une nouvelle option
                            </h6>


                            <label for="proprety" style="display:none">xxxxxxxxx</label>

                            <input
                              style="width: 51%"
                              v-model="proprety.name"
                              required
                              type="text"
                              class="form-control form-group"
                              placeholder="Ex: Hauteur"
                              v-if="managementAnnonceStep == 1"
                              id="proprety"
                            />
                            <label for="service" style="display:none">xxxxxxxxx</label>

                            <input
                              style="width: 51%"
                              v-model="service.name"
                              required
                              type="text"
                              class="form-control form-group"
                              placeholder="Ex : Salle de bain"
                              v-if="managementAnnonceStep == 2"
                                                            id="service"

                            />
                            <label for="option" style="display:none">xxxxxxxxx</label>

                            <input
                              style="width: 51%"
                              v-model="option.name"
                              required
                              type="text"
                              class="form-control form-group"
                              placeholder="Ex : Linge de lits"
                              v-if="managementAnnonceStep == 3"
                                                            id="option"

                            />
                          <fieldset>
                              <legend>
                                                              Pour quel type d'hébergements

                              </legend>

                          <ul>
                              <li>
                                <div class="gender-details">
                                  <div class="checkboxPropretyForm">
                                    <input
                                      v-for="(
                                        typeLogement, key
                                      ) in typesLogement"
                                      :key="key"
                                      type="checkbox"
                                      v-model="proprety.typesLogementIds"
                                      name="typeLogement"
                                      :value="typeLogement.id"
                                      :id="'dot-' + key"
                                    />

                                    <div
                                      v-for="(
                                        typeLogement, key
                                      ) in typesLogement"
                                      :key="key"
                                      class="category"
                                    >
                                      <label :for="'dot-' + key">
                                        <span
                                          :class="'label' + key"
                                          class="dot"
                                        ></span>
                                        <span class="gender">{{
                                          typeLogement.name
                                        }}</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
</fieldset>


<fieldset>
<legend v-if="managementAnnonceStep == 1">
                              Obligatoire ou non ?
                            </legend>
                           <ul v-if="managementAnnonceStep == 1">
                              <li>
                                <div class="gender-details">
                                  <div class="checkboxPropretyForm">
                                    <input
                                      type="radio"
                                      v-model="proprety.required"
                                      name="requiredInput"
                                      value="Oui"
                                      id="radioAnimaux1"
                                      required
                                    />
                                    <div class="category">
                                      <label for="radioAnimaux1">
                                        <span class="dot oneAnimaux"></span>
                                        <span class="gender">Oui</span>
                                      </label>
                                    </div>

                                    <input
                                      type="radio"
                                      v-model="proprety.required"
                                      name="requiredInput"
                                      value="Non"
                                      id="radioAnimaux2"
                                    />
                                    <div class="category">
                                      <label for="radioAnimaux2">
                                        <span class="dot twoAnimaux"></span>
                                        <span class="gender">Non</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
</fieldset>

                             <h6 v-if="managementAnnonceStep == 1">
                              Unité de mesure ?
                            </h6>

                            <label v-if="managementAnnonceStep == 1" for="unity" style="display:none">xxxxxxxxx</label>

                            <select v-if="managementAnnonceStep == 1" style="padding: 3px 20px;" id="unity" v-model="proprety.unity" name="" >
                                <option selected value="">Aucune</option>
                                <option value="m">Métre (m)</option>
                                <option value="cm">Centimétre (cm)</option>
                                <option value="m²">Métre carré (m²)</option>
                                <option value="㎥">Métre cube (㎥)</option>
                                <option value="l">Litre (l)</option>
                            </select>

                            <div class="btnDivFormPro">
                              <button
                                type="submit"
                                class="
                                  contact_form_submit contact_form_submitAux
                                "
                                v-if="managementAnnonceStep == 1"
                              >
                                Ajouter
                              </button>

                              <button
                                v-if="managementAnnonceStep == 2"
                                type="submit"
                                class="
                                  contact_form_submit contact_form_submitAux
                                "
                              >
                                Ajouter
                              </button>
                              <button
                                v-if="managementAnnonceStep == 3"
                                type="submit"
                                class="
                                  contact_form_submit contact_form_submitAux
                                "
                              >
                                Ajouter
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";

export default {
  data() {
    return {
      userRole: "",

      windowStep: 1,
      moderateurs: [],
      admins: [],
      owners: [],
      clients: [],

      admin: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "admin",
      },
      adminsErrors: {
        lastname: "",
        firstname: "",
        password: "",
        email: "",
      },

      moderateur: {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "moderateur",
      },
      moderateurErrors: {
        lastname: "",
        firstname: "",
        password: "",
        email: "",
      },

      token: "",

      connectedUser: {
        email: "",
      },

      notifications: [],
      notificationsAvatars: [],

      newNotificationsCheck: false,
      newNotificationsCheckCount: 0,

      annonces: [],
      typeLogementArray: [],

      limitCardsShowen: 4,

      titreChFiltre: "",
      typeLogementCh: "",
      sortValue: "news",

      typesLogement: [],
      typeLogementToAdd: "",

      propretiesArray: [],
      proprety: {
        typesLogementIds: [],
        name: "",
        required: "",
        unity : "",
      },

      service: {
        typesLogementIds: [],
        name: "",
      },

      servicesArray: [],

      option: {
        typesLogementIds: [],
        name: "",
      },

      optionsArray: [],
      managementAnnonceStep: 0,



      /////////
      reservationStatusValue:'',
            reservationStats: [],
            reservations:[],
            sortReservationValue:'news',
reservationSearchTextValue:'',
    };
  },

  computed: {
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
    sortedAnnonces() {
      if (this.titreChFiltre != "") {
        this.limitCardsShowen = 10000;
        this.sortValue = "news";
        return this.annonces
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
          return this.annonces
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
          return this.annonces
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
          return this.annonces
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
          return this.annonces
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
          return this.annonces;
        }
      }
    },
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.connectedUser.email = localStorage.getItem("useremail");

    this.windowStep = localStorage.getItem("windowStep");

    this.userRole = localStorage.getItem("userRole");
    if (localStorage.getItem("token") != "") {
      this.loggedIn = true;
    } else if (
      this.userRole == "owner" ||
      this.userRole == "client" ||
      this.userRole == "moderateur" ||
      localStorage.getItem("token") == ""
    ) {
      this.loggedIn = false;

      this.$router.push({ path: "/" });
    }
    this.getTypeLogement();
    this.getAllReservations();


    this.getModerateursInfo();
    this.getAdminsInfo();
    this.getOwnersInfo();
    this.getClientsInfo();
    this.getUserNotifications();
    this.getAnnonces();

    this.getPropreties();
    this.getServices();
    this.getOptions();

    if (this.windowStep == 3) {
      this.changeNotificationReadingState();
    }
  },

  methods: {

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

      getAllReservations() {
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
        .get("/api/getAllReservation", config)
        .then((response) => {




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


    reservationStatusValueChanged() {
      this.reservationStatusValue = this.reservationStatusValue;
    },

    getOptions() {
      this.optionsArray = [];
      axios.get("/api/getOptions").then((result) => {
        result.data.options.forEach((element) => {
          this.optionsArray.push(element);
        });
      });
    },

    checkOptionSelectedType(id, option) {
      option.typesLogementIds = option.typesLogementIds.replace("[", "");

      option.typesLogementIds = option.typesLogementIds.replace("]", "");

      let auxArray = option.typesLogementIds.split(",");

      let check = false;
      let state = false;
      auxArray.forEach((element) => {
        if (element == id) {
          check = true;
          state = true;
        } else if (element != id && !state) {
          check = false;
        }
      });

      return check;
    },

    addOption() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.option.typesLogementIds = this.proprety.typesLogementIds;

      let req = this.option;
      axios
        .post("api/addOption/", req, config)
        .then((response) => {

            $("#addPropretyForm").hide();
            $("body").removeClass("modal-open");
            $("body").css({ 'overflow' : 'auto' });
            $(".modal-backdrop").remove();

          this.proprety = {
            typesLogementIds: [],
            name: "",
          };
          this.option = {
            typesLogementIds: [],
            name: "",
          };
          this.getOptions();
        })
        .catch((err) => {
          Swal.fire({
            actions: "error",
            icon: "error",
            title: "Veuillez bien remplire tout les champs",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        });
    },

    updateOptionTypeLogement(option_id, typeLogement_id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
        id: option_id,
        type_logement_id: typeLogement_id,
      };

      let reqAux = {
        id: option_id,
      };

      let checkedBeforeOrNot = false;
      let typesLogementByOptionArray = [];

      axios
        .post("/api/getTypesOfLogementByOption", reqAux, config)
        .then((result) => {
          JSON.parse(
            result.data.typesLogementByOption[0].typesLogementIds
          ).forEach((element) => {
            typesLogementByOptionArray.push(element);
          });

          typesLogementByOptionArray.forEach((element) => {
            if (element == typeLogement_id) {
              checkedBeforeOrNot = true;
            } else {
            }
          });

          if (checkedBeforeOrNot) {
            Swal.fire({
              text: "Voulez-vous vraiment supprimer cette propriété pour ce type de logement ",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "red",
              denyButtonColor: "#272a2c",
              icon: "info",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                axios
                  .post("/api/updateOptionTypeLogementState", req, config)
                  .then((result) => {
                    this.getOptions();
                  });

                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Propriété mis à jour",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            });
          } else {
            Swal.fire({
              icon: "info",

              text: "Voulez-vous vraiment ajouter cette propriété pour ce type de logement ",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "#2591cc",
              denyButtonColor: "#272a2c",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                axios
                  .post("/api/updateOptionTypeLogementState", req, config)
                  .then((result) => {
                    this.getOptions();
                  });

                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Propriété ajoutée",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            });
          }
        });
    },

    submitAddForm() {
      if (this.managementAnnonceStep == 1) {
        this.addProprety();
      } else if (this.managementAnnonceStep == 2) {
        this.addServices();
      } else if (this.managementAnnonceStep == 3) {
        this.addOption();
      }
    },

    deleteTypeLogement(id, key) {
      if (this.typesLogement[key].name == "Autre") {
      } else {
        let config = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        };

        Swal.fire({
          text: "Êtes-vous sûr de vouloir supprimer ce type d'hébergement ?",
          icon: "info",
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
            axios
              .delete("/api/deleteTypeLogement/" + id, config)
              .then((result) => {
                this.getTypeLogement();
              });

            Swal.fire({
              actions: "success",
              icon: "success",
              title: "Suprimé",
              confirmButtonColor: "#272a2c",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            });
          }
        });
      }
    },

    updateRequiredProprety(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
        id: id,
      };

      Swal.fire({
        // title: "Gestion d'images",
        icon: "question",
        showDenyButton: true,
        confirmButtonColor: "rgb(255, 78, 78)",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        denyButtonColor: "#4c8dc2",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        cancelButtonColor: "rgb(31, 31, 31)",
        cancelButtonClass: " px-4 py-2 rounded-pill ",
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        denyButtonText: `Modifier`,
        cancelButtonText: `Fermer`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            title: "Supprimer cette propriéte?",
            showDenyButton: true,
            confirmButtonColor: "rgb(255, 78, 78)",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            denyButtonColor: "rgb(31, 31, 31)",
            denyButtonClass: " px-4 py-2 rounded-pill ",
            showCancelButton: false,
            confirmButtonText: "Supprimer",
            denyButtonText: `Non`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.deleteProprety(id);
            }
          });
        }

        if (result.isDenied) {
          const inputOptions = new Promise((resolve) => {
            resolve({
              Oui: "Oui",
              Non: "Non",
            });
          });

          Swal.fire({
            icon: "question",
            text: "Obligatoire ?",
            input: "radio",
            inputOptions: inputOptions,
            confirmButtonColor: "#2591cc",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
            confirmButtonText: "Mettre à jour",

            inputValidator: (value) => {
              if (!value) {
                return "Vous devez choisir une réponse";
              }

              req.content = value;

              if (value) {
                axios
                  .post("/api/updateRequiredProprety", req, config)
                  .then((result) => {
                    this.getPropreties();
                  });
                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Mis à jour",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            },
          });
        }
      });
    },

    deleteProprety(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
        id: id,
        user_id: localStorage.getItem("userId"),
      };

      axios
        .post("api/deletePropretyById", req, config)
        .then((result) => {
          this.getPropreties();
        })
        .catch((err) => {});
    },

    updatePropretyTypeLogement(prop_id, typeLogement_id , prop_name , typeLogement_name) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
        id: prop_id,
        type_logement_id: typeLogement_id,
      };

      let reqAux = {
        id: prop_id,
      };

      let checkedBeforeOrNot = false;
      let typesLogementByPropretyArray = [];

      axios
        .post("/api/getTypesOfLogementByProprety", reqAux, config)
        .then((result) => {
          JSON.parse(
            result.data.typesLogementByProprety[0].typesLogementIds
          ).forEach((element) => {
            typesLogementByPropretyArray.push(element);
          });

          typesLogementByPropretyArray.forEach((element) => {
            if (element == typeLogement_id) {
              checkedBeforeOrNot = true;

            }
          });

          if (checkedBeforeOrNot) {
            Swal.fire({
              text: "Voulez-vous vraiment supprimer cette propriété pour ce type de logement ",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "red",
              denyButtonColor: "#272a2c",
              icon: "info",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                axios
                  .post("/api/updatePropretyTypeLogementState", req, config)
                  .then((result) => {


                            axios.get("api/getAnnoncesByTypeLogementId/"+typeLogement_id, config).then((response) => {
                                response.data.annonces.forEach(element => {


                           let notification = {
        from_id: localStorage.getItem("userId"),
      };
             notification.content = "L'administration à supprimé une propriété ("+prop_name+") pour le type ("+typeLogement_name+") ";
             notification.type = "update";
      notification.user_id = element.user_id;
 notification.link = "/annonce/?id=" + element.id;
      axios.post("api/sendNotification", notification, config);


                                });
                            })



                    this.getPropreties();
                  });

                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Propriété mis à jour",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            });
          } else {
            Swal.fire({
              icon: "info",

              text: "Voulez-vous vraiment ajouter cette propriété pour ce type de logement ",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "#2591cc",
              denyButtonColor: "#272a2c",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                axios
                  .post("/api/updatePropretyTypeLogementState", req, config)
                  .then((result) => {

                            axios.get("api/getAnnoncesByTypeLogementId/"+typeLogement_id, config).then((response) => {
                                response.data.annonces.forEach(element => {


                           let notification = {
        from_id: localStorage.getItem("userId"),
      };
             notification.content = "L'administration à ajouté une propriété ("+prop_name+") pour le type ("+typeLogement_name+") ";
             notification.type = "update-modal";
      notification.user_id = element.user_id;
 notification.link = "/updateAnnonce/?annonce_id="+element.id;
      axios.post("api/sendNotification", notification, config);


                                });
                            })
                    this.getPropreties();
                  });

                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Propriété ajoutée",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            });
          }
        });
    },

    checkPropretySelectedType(id, prop) {
      prop.typesLogementIds = prop.typesLogementIds.replace("[", "");

      prop.typesLogementIds = prop.typesLogementIds.replace("]", "");

      let auxArray = prop.typesLogementIds.split(",");

      let check = false;
      let state = false;
      auxArray.forEach((element) => {
        if (element == id) {
          check = true;
          state = true;
        } else if (element != id && !state) {
          check = false;
        }
      });

      return check;
    },

    addProprety() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.proprety.user_id=localStorage.getItem('userId');

      let req = this.proprety;

      axios
        .post("api/addProprety/", req, config)
        .then((responseAux) => {

            $("#addPropretyForm").hide();
            $("body").removeClass("modal-open");
            $("body").css({ 'overflow' : 'auto' });
            $(".modal-backdrop").remove();

         this.proprety = {
            typesLogementIds: [],
            name: "",
          };


          this.getPropreties();
        })
        .catch((err) => {
          Swal.fire({
            actions: "error",
            icon: "error",
            title: "Veuillez bien remplire tout les champs",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        });
    },

    getPropreties() {
      this.propretiesArray = [];
      axios.get("/api/getPropreties").then((result) => {
        result.data.propreties.forEach((element) => {
          this.propretiesArray.push(element);
        });
      });
    },

    getServices() {
      this.servicesArray = [];
      axios.get("/api/getServices").then((result) => {
        result.data.services.forEach((element) => {
          this.servicesArray.push(element);
        });
      });
    },

    addServices() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.service.typesLogementIds = this.proprety.typesLogementIds;

      let req = this.service;
      axios
        .post("api/addService/", req, config)
        .then((response) => {

            $("#addPropretyForm").hide();
            $("body").removeClass("modal-open");
            $("body").css({ 'overflow' : 'auto' });
            $(".modal-backdrop").remove();

          this.service = {
            typesLogementIds: [],
            name: "",
          };

          this.proprety = {
            typesLogementIds: [],
          };
          this.getServices();
        })
        .catch((err) => {
          Swal.fire({
            actions: "error",
            icon: "error",
            title: "Veuillez bien remplire tout les champs",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        });
    },

    updateServiceTypeLogement(service_id, typeLogement_id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
        id: service_id,
        type_logement_id: typeLogement_id,
      };

      let reqAux = {
        id: service_id,
      };

      let checkedBeforeOrNot = false;
      let typesLogementByServiceArray = [];

      axios
        .post("/api/getTypesOfLogementByService", reqAux, config)
        .then((result) => {
          JSON.parse(
            result.data.typesLogementByService[0].typesLogementIds
          ).forEach((element) => {
            typesLogementByServiceArray.push(element);
          });

          typesLogementByServiceArray.forEach((element) => {
            if (element == typeLogement_id) {
              checkedBeforeOrNot = true;
            }
          });

          if (checkedBeforeOrNot) {
            Swal.fire({
              text: "Voulez-vous vraiment supprimer ce service pour ce type de logement ",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "red",
              denyButtonColor: "#272a2c",
              icon: "info",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                axios
                  .post("/api/updateServiceTypeLogementState", req, config)
                  .then((result) => {
                    this.getServices();
                  });

                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Propriété mis à jour",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            });
          } else {
            Swal.fire({
              icon: "info",

              text: "Voulez-vous vraiment ajouter ce service pour ce type de logement ",
              showDenyButton: true,
              showCancelButton: false,
              denyButtonText: `Non`,
              confirmButtonColor: "#2591cc",
              denyButtonColor: "#272a2c",

              confirmButtonText: "Oui",
              denyButtonClass: " px-4 py-2 rounded-pill ",
              confirmButtonClass: " px-4 py-2 rounded-pill ",
              customClass: { popup: "swal2-border-radius" },
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                axios
                  .post("/api/updateServiceTypeLogementState", req, config)
                  .then((result) => {
                    this.getServices();
                  });

                Swal.fire({
                  actions: "success",
                  icon: "success",
                  title: "Propriété ajoutée",
                  confirmButtonColor: "#272a2c",
                  confirmButtonClass: " px-4 py-2 rounded-pill ",
                  customClass: { popup: "swal2-border-radius" },
                });
              }
            });
          }
        });

      Swal.fire({
        text: "Voulez-vous vraiment modifier ce service pour ce type de logement ",
        showDenyButton: true,
        showCancelButton: false,
        denyButtonText: `Non`,
        confirmButtonColor: "#2591cc",
        denyButtonColor: "#272a2c",

        confirmButtonText: "Oui",
        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios
            .post("/api/updateServiceTypeLogementState", req, config)
            .then((result) => {
              this.getServices();
            });

          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Propriété modifiée",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    checkServiceSelectedType(id, service) {
      service.typesLogementIds = service.typesLogementIds.replace("[", "");

      service.typesLogementIds = service.typesLogementIds.replace("]", "");

      let auxArray = service.typesLogementIds.split(",");

      let check = false;
      let state = false;
      auxArray.forEach((element) => {
        if (element == id) {
          check = true;
          state = true;
        } else if (element != id && !state) {
          check = false;
        }
      });

      return check;
    },

    async addTypeLogement() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      let req = {
        name: this.typeLogementToAdd,
      };

      const { value: formValues } = await Swal.fire({
        showDenyButton: true,

        denyButtonText: `Fermer`,
        denyButtonColor: "#272a2c",
        confirmButtonText: "Ajouter",

        denyButtonClass: " px-4 py-2 rounded-pill ",
        confirmButtonColor: "#2591cc",
        confirmButtonClass: " px-4 py-2 rounded-pill ",
        customClass: { popup: "swal2-border-radius" },
        icon: "info",
        title: "Ajouter un nouveau type d'hébergement...",
        html: '<input id="swal-input1" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return document.getElementById("swal-input1").value;
        },
      });

      req.name = formValues;

      if (formValues) {
        axios.post("api/addTypeLogement/", req, config).then((response) => {
          this.getTypeLogement();
        });

        Swal.fire({
          actions: "success",
          icon: "success",
          title: "Type d'hébergement ajouté",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" },
        });
        //   Swal.fire(JSON.stringify(formValues))
      } else {
        Swal.fire({
          actions: "error",
          icon: "error",
          title: "Type non ajouté",
          confirmButtonColor: "#272a2c",
          confirmButtonClass: " px-4 py-2 rounded-pill ",
          customClass: { popup: "swal2-border-radius" },
        });

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Aucune mofidication effectuée",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },

    getTypeLogement() {
      this.typesLogement = [];
      axios
        .get("/api/getTypeLogement")
        .then((response) => {
          response.data.typesLogement.forEach((element) => {
            if (element.name != "Autre") this.typesLogement.push(element);
          });

          response.data.typesLogement.forEach((element) => {
            if (element.name == "Autre") this.typesLogement.push(element);
          });
        })
        .catch((err) => {});
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
          this.getAnnonces();
        })
        .catch((err) => {});
    },

    getAnnonces() {
      this.annonces = [];
      axios.get("api/getAnnonces").then((response) => {
        response.data.annoncesOrdered.forEach((element) => {
          this.typesLogement.forEach((elementaux) => {
            if (elementaux.id == element.type_logement_id) {
              element.typeLogement = elementaux.name;
            }
          });

          this.annonces.push(element);
        });
      });
    },

    orderByChanged() {
      this.sortValue = this.sortValue;
      this.typeLogementCh = "";
      this.titreChFiltre = "";
    },

    typeLogementCount(ch) {
      let typeLogementCount = 0;

      if (ch != "") {
        this.annonces.forEach((element) => {
          if (element.typeLogement == ch) {
            typeLogementCount++;
          }
        });

        return typeLogementCount;
      }
      if (ch == "") {
        return this.annonces.length;
      }
    },

    showMoreAction() {
      this.limitCardsShowen += 4;
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
      this.newNotificationsCheckCount = 0;

      this.notifications = [];

      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.admin.id = localStorage.getItem("userId");

      axios
        .post("/api/getUserNotifications", this.admin, config)
        .then((response) => {
          if (response.data.notifications.length > 0) {
            response.data.notifications.forEach((element) => {
              if (element.read_at == null) {
                this.newNotificationsCheck = true;

                this.newNotificationsCheckCount++;
              }

              response.data.avatars.forEach((elAux) => {
                if (elAux.user_id == element.from_id) {
                  element.avatar = elAux;
                }
              });

              this.notifications.push(element);
            });
          }

          if (response.data.from_users.length > 0) {
            response.data.from_users.forEach((element, key) => {
              this.notifications[key].from_users = element;
            });
          }
        })
        .catch((err) => {});
    },
    windowStepFunction(x) {
      this.windowStep = x;
      localStorage.setItem("windowStep", x);

      let windowWidth = window.innerWidth;
      if (windowWidth < 820) {
        this.$router.go();
      }

      if (x == 2) {
        this.changeMessageReadingState();
      }
      if (x == 3) {
        this.changeNotificationReadingState();
      }
    },

    getOwnerIdToDelete(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer ce compte Host?",

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
          this.deleteUserProfile(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Propriétaire à été bien suprimé",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    getClientIdToDelete(id) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer le client?",

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
          this.deleteUserProfile(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Client à été bien suprimé",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    deleteUserProfile(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      axios.delete("api/deleteUser/" + id, config).then((result) => {
        this.getModerateursInfo();
        this.getAdminsInfo();
        this.getOwnersInfo();
        this.getClientsInfo();
      });
    },

    addAdmin() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.admin.role = "admin";

      axios
        .post("/api/signupClient", this.admin, config)
        .then((response) => {
          if (response.data.status == "invalid") {
            this.adminsErrors.firstname = "";
            this.adminsErrors.email = "";
            this.adminsErrors.password = "";
            this.adminsErrors.lastname = "";
          } else if (response.data.status == "true") {
            Swal.fire("Bon travail!", "Administrateur crée", "success");

            this.admin = {
              lastname: "",
              firstname: "",
              email: "",
              password: "",
              role: "admin",
            };

            $("#addAdmin").hide();
            $("body").removeClass("modal-open");
            $(".modal-backdrop").remove();

            this.getAdminsInfo();
          } else {
            this.adminsErrors.firstname = "";
            this.adminsErrors.email = "";
            this.adminsErrors.password = "";
            this.adminsErrors.lastname = "";
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.errors) {
              if (error.response.data.errors.firstname) {
                this.adminsErrors.firstname =
                  error.response.data.errors.firstname[0] ?? "";
              } else {
                this.adminsErrors.firstname = "";
              }
              if (error.response.data.errors.email) {
                this.adminsErrors.email =
                  error.response.data.errors.email[0] ?? "";
              } else {
                this.adminsErrors.email = "";
              }

              if (error.response.data.errors.password) {
                this.adminsErrors.password =
                  error.response.data.errors.password[0] ?? "";
              } else {
                this.adminsErrors.password = "";
              }

              if (error.response.data.errors.lastname) {
                this.adminsErrors.lastname =
                  error.response.data.errors.lastname[0] ?? "";
              } else {
                this.adminsErrors.lastname = "";
              }
            }
          }
        });
    },

    addModerateur() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.moderateur.role = "moderateur";

      axios
        .post("/api/signupClient", this.moderateur, config)
        .then((response) => {
          if (response.data.status == "invalid") {
            this.moderateurErrors.firstname = "";
            this.moderateurErrors.email = "";
            this.moderateurErrors.password = "";
            this.moderateurErrors.lastname = "";
          } else if (response.data.status == "true") {
            Swal.fire("Bon travail!", "Modérateur crée", "success");

            this.moderateur = {
              lastname: "",
              firstname: "",
              email: "",
              password: "",
              role: "moderateur",
            };

            $("#addModerateur").hide();
            $("body").removeClass("modal-open");
            $(".modal-backdrop").remove();

            this.getModerateursInfo();
          } else {
            this.moderateurErrors.firstname = "";
            this.moderateurErrors.email = "";
            this.moderateurErrors.password = "";
            this.moderateurErrors.lastname = "";
          }
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data.errors) {
              if (error.response.data.errors.firstname) {
                this.moderateurErrors.firstname =
                  error.response.data.errors.firstname[0] ?? "";
              } else {
                this.moderateurErrors.firstname = "";
              }
              if (error.response.data.errors.email) {
                this.moderateurErrors.email =
                  error.response.data.errors.email[0] ?? "";
              } else {
                this.moderateurErrors.email = "";
              }

              if (error.response.data.errors.password) {
                this.moderateurErrors.password =
                  error.response.data.errors.password[0] ?? "";
              } else {
                this.moderateurErrors.password = "";
              }

              if (error.response.data.errors.lastname) {
                this.moderateurErrors.lastname =
                  error.response.data.errors.lastname[0] ?? "";
              } else {
                this.moderateurErrors.lastname = "";
              }
            }
          }
        });
    },

    hasError(item) {
      if (this.adminsErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },

    hasErrorModerateur(item) {
      if (this.moderateurErrors[item] != "") {
        return true;
      } else {
        return false;
      }
    },

    getClientsInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      this.admin.role = "client";
      axios.post("api/getUserByRole", this.admin, config).then((response) => {
        this.clients = [];
        //this.admins = response.data.users;
        response.data.users.forEach((element) => {
          this.clients.push(element);
        });
      });
    },

    getOwnersInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      this.admin.role = "owner";
      axios.post("api/getUserByRole", this.admin, config).then((response) => {
        this.owners = [];
        //this.admins = response.data.users;
        response.data.users.forEach((element) => {
          this.owners.push(element);
        });
      });
    },
    getAdminsInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      this.admin.role = "admin";

      axios.post("api/getUserByRole", this.admin, config).then((response) => {
        this.admins = [];
        response.data.users.forEach((element) => {
          this.admins.push(element);
        });
      });
    },

    getAdminIdToDelete(x) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer ce compte d'administrateur?",

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
          this.deleteUserProfile(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Compte administrateur à été bien suprimé",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    getModerateurIdToDelete(x) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir supprimer ce compte de modérateur?",

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
          this.deleteUserProfile(id);
          Swal.fire({
            actions: "success",
            icon: "success",
            title: "Compte modérateur à été bien suprimé",
            confirmButtonColor: "#272a2c",
            confirmButtonClass: " px-4 py-2 rounded-pill ",
            customClass: { popup: "swal2-border-radius" },
          });
        }
      });
    },

    resetFormValues() {
      this.admin = {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "admin",
      };

      this.moderateur = {
        lastname: "",
        firstname: "",
        email: "",
        password: "",
        role: "moderateur",
        id: "",
      };
    },

    getModerateursInfo() {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      this.moderateur.role = "moderateur";
      //   this.moderateur.role = ;

      axios
        .post("api/getUserByRole", this.moderateur, config)
        .then((response) => {
          this.moderateurs = [];
          //this.admins = response.data.users;
          response.data.users.forEach((element) => {
            this.moderateurs.push(element);
          });
        });
    },

    getModerateurInfo(id) {
      let config = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      this.moderateurIdToUpdate.id = id;

      axios
        .post("api/getUser", this.moderateurIdToUpdate, config)
        .then((response) => {
          this.moderateur.lastname = response.data.user[0].lastname;
          this.moderateur.firstname = response.data.user[0].lastname;
          this.moderateur.email = response.data.user[0].email;
        });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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
            this.getAllReservations();
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
  },
};
</script>




<style lang="css">
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
</style>


<style lang="scss">
.userCardProfileDashboard {
  display: grid;
  grid-template-columns: 33% 33% 33%;

  .userCardProfileDashboardCard {
    padding: 15px;
    width: 22vw;

    background: #e2e2e2;
    border-radius: 22px;
    text-align: center;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    user-select: none;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cover-photo {
    position: relative;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: rgba(255, 255, 255, 0);
    }
  }

  .userCardProfileDashboardProfile {
    position: absolute;
    width: 120px;
    bottom: -60px;
    left: 15px;
    border-radius: 50%;
    border: 2px solid #222;
    background: #222;
    padding: 5px;
  }

  .userCardProfileDashboardName {
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }

  .userCardProfileDashboardAbout {
    margin-top: 30px;
    line-height: 1.6;
    display: flex;
    color: rgb(0, 0, 0);
    word-break: break-all;
  }

  .userCardProfileDashboardBtn {
    margin: 10px 25%;
    background: #d03d3d00;
    padding: 0;
    border-radius: 3px;
    font-weight: bold;
    font-family: Montserrat;
    cursor: pointer;
    color: rgb(255, 0, 0);
    transition: 0.2s;
  }

  .userCardProfileDashboardBtn:hover {
    background: transparent;
    color: #e66565;
  }

  .userCardProfileDashboardIcons {
    width: 180px;
    margin: 0 auto 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .userCardProfileDashboardIcons i {
    cursor: pointer;
    padding: 5px;
    font-size: 18px;
    transition: 0.2s;
    color: #292626;
  }

  .userCardProfileDashboardIcons i:hover {
    color: #5190e2;
  }
}

.swal2-popup .swal2-styled:focus {
  box-shadow: none !important;
}

@media screen and (max-width: 900px) {
  .userCardProfileDashboard {
    display: grid;
    grid-template-columns: 50% 50%;

    .userCardProfileDashboardCard {
      width: 32vw;
    }
  }
}

@media screen and (max-width: 850px) {
    #containerAnnonce {
    width: 90vw;
}
  .userCardProfileDashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .userCardProfileDashboardCard {
      width: 70vw;
    }
  }
}

.topBarGrid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
}

.container {
  width: 50%;
  padding: 40px;
  margin: 0 auto;
  transition: all 0.3s;
  padding: 0;
}

h1 {
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
  font-size: 35px;
}

#newTask {
  position: relative;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 45%;
}

#newTask input {
  width: 65%;
  height: 40px;
  font-size: 20px;
  padding: 15px;
  border: 2px solid #d1d3d4;
  color: #111;
  font-weight: 500;
  position: relative;
  border-radius: 5px;
}

#newTask input:focus {
  outline: none;
  border-color: #2591cc;
}

#newTask button {
  position: relative;
  float: right;
  width: 30%;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  background-color: #000000;
  border: none;
  color: #fff;
  cursor: pointer;
  // border-radius: 47px;
}

#tasks {
  background-color: #fff;
  padding: 30px;
  margin-top: 0px;
  border-radius: 10px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;
  align-items: center;
}

.task {
  position: relative;
  background-color: #fff;
  height: 60px;
  padding: 15px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  width: 70%;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
}

.taskAux {
  border-bottom: none;
}

.taskAux:hover {
  background-color: #fff;
}

.completed {
  text-decoration: line-through;
}

.task span {
  font-size: 16px;
  font-weight: 400;
}

.task button {
  background-color: #2592cc00;
  color: rgb(250, 95, 95);
  height: 100%;
  width: 28px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
}

@media all and (max-width: 1500px) {
  .container {
    width: 100%;
  }
}

@media all and (max-width: 767px) {
  .container {
    width: 100%;
    min-width: 320px;
    padding: 20px;
  }
  h1 {
    margin-bottom: 20px;
    font-size: 30px;
  }
  #newTask {
    padding: 15px;
  }
  #newTask input {
    height: 45px;
    font-size: 15px;
    padding: 10px;
  }
  #newTask button {
    height: 45px;
    font-size: 15px;
  }
  #tasks {
    padding: 15px;
    margin-top: 20px;
  }
  .task {
    height: 45px;
    padding: 10px;
    margin-top: 5px;
  }
  .task span {
    font-size: 15px;
  }
  .task button {
    width: 23px;
  }
}
.comparison {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 30px;
  font: 13px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 10px;
}

.comparison table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
}

.comparison td,
.comparison th {
  empty-cells: show;
  padding: 10px;
  color: #808080;
  font-size: 15px;
  border: none;
}

.comparison td {
  cursor: pointer;
}

.comparison td:hover {
  cursor: pointer;
  background-color: rgb(240, 240, 240);
}

.comparison .compare-row {
  background: #f7f7f7;
}

.fa-check {
  color: #20c997;
}

.comparison th {
  font-weight: normal;
  padding: 0;
  border-top: 0px solid #e8e8e8;
  border-bottom: 0px solid #e8e8e8;
}

.comparison tr td:first-child {
    background: rgb(238, 235, 235);
  text-align: left;
  padding: 15px;
  color: rgb(0, 0, 0);
  border-left: 1px solid #e8e8e8;
}

.comparison .product,
.comparison .tl {
  color: #fff;
  padding: 10px;
  font-size: 14px;
}

.comparison .tl2 {
  border-right: 0;
}

.comparison .product {
  background: #222121;
  height: 40px;
  font-size: 14px;
}

.comparison .price-buy {
  background: #292b2c;
  padding: 10px 20px;
  font-size: 14px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  text-transform: uppercase;
  margin: 5px 0 10px 0;
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
  margin-top: 40px;
}

.btnTableManagementDashBoard {
  display: flex;
}

.comparison .price-buy:hover {
  background: #292b2c;
}

.comparison .price-buy:active {
  background: #292b2c;
}

@media screen and (min-width: 721px) and (max-width: 1000px) {
  .table_ul li {
    letter-spacing: 0px;
  }
}

//   @media screen and (max-width: 720px) {
//     .table_ul {
//       padding: 0px;
//     }
//     .table_ul li {
//       font-size: 10px;
//       line-height: 16px;
//       padding: 3px 0;
//     }
//     .comparison {
//       max-width: 100%;
//     }
//     .comparison td:first-child,
//     .comparison th:first-child {
//       display: none;
//     }
//     .comparison tbody tr:nth-child(odd) {
//       display: table-row;
//       background: #f7f7f7;
//     }
//     .comparison .row {
//       background: #fff;
//     }
//     .comparison td,
//     .comparison th {
//       border: 1px solid #ccc;
//       border-top: none;
//       padding: 10px;
//     }

//     .comparison .compare-row {
//       background: #ffffff;
//     }

//     .comparison .qbse {
//       font-size: 1.2em;
//     }
//     .comparison td {
//       font-size: 14px;
//     }
//     .comparison th {
//       font-size: 14px;
//     }
//   }

#addPropretyForm {
  .modal-body {
    margin: 0;
    padding: 0;
  }

  .contact_fieldAux {
    padding: 30px;
  }

  .contact_inner {
    box-shadow: none;
  }

  .category {
    justify-content: start;
    align-items: center;
  }

  .contact_form_submitAux {
    width: 40%;
    background-color: brown;
  }

  .checkboxPropretyForm {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }

  .btnDivFormPro {
    display: flex;
    justify-content: flex-end;
  }
}

.tableCellsManagement {
  cursor: pointer;
}

.tableCellsManagement:hover {
  cursor: pointer;
  background-color: rgb(240, 240, 240);
}

.swal2-radio label,
.swal2-checkbox label {
  margin: 0 0.6em;
  font-size: 1.125em;
  display: flex;
  align-items: center;
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
</style>
