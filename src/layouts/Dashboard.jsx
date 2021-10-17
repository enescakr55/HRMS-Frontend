import React from "react";
import {  Container, Grid } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import Flow from "./Flow";
import EmployerList from "../pages/EmployerList";
import AdminFlow from "../layouts/AdminFlow";
import { Route,useLocation } from "react-router-dom";
import SelectRegisterType from "../pages/SelectRegisterType";
import Main from "../pages/Main";
import SignInPage from "../pages/SignInPage";
import JobseekerList from "../pages/JobseekerList";
import JobRoleManagement from "../pages/JobRoleManagement";
import JobAdvertList from "../pages/JobAdvertList";
import EmployerSignUpPage from "../pages/EmployerSignUpPage";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import JobAdvertApproval from "../pages/JobAdvertApproval";
import SignUp from "../pages/SignUp";
import JobseekerSignUpPage from "../pages/JobseekerSignUpPage";
import FavoriteJobAdverts from "../pages/FavoriteJobAdverts";
import MyJobAdverts from "../pages/MyJobAdverts";
import UploadProfileImage from "../pages/UploadProfileImage";
import BusinessProfileEdit from "../pages/BusinessProfileEdit";
import AddJobAdvertByEmployer from "../pages/AddJobAdvertByEmployer";
import AdvertDetails from "../pages/AdvertDetails";
import UserProfile from "../pages/UserProfile";
import UserProfileEdit from "../pages/UserProfileEdit";
import UserDescriptionEdit from "../pages/profileEdit/UserDescriptionEdit";
import UserSchoolEdit from "../pages/profileEdit/UserSchoolEdit";
import UserLanguageEdit from "../pages/profileEdit/UserLanguageEdit";
import UserExperienceEdit from "../pages/profileEdit/UserExperienceEdit";
export default function Dashboard() {
  const fulllocation = useLocation();
  //console.log(location.pathname);
  const location = fulllocation.pathname.split("/")[1];
  console.log(location);
  const usersFlow = ["employers","jobseekers","","main","jobs","favorite-job-adverts","my-job-adverts","user-profile","user-profile-edit"];
  const adminFlow = ["jobrolemanagement","jobadvertadd","jobadvertapprove"];
  const usersFlowLength = usersFlow.filter(p=>p==location).length;
  const adminFlowLength = adminFlow.filter(p=>p==location).length;
  return (
    
    <div>
      <ToastContainer position="bottom-right" />

      <Grid stackable>
        <Grid.Row columns={2} only="computer">
        {usersFlowLength > 0 && <Grid.Column  textAlign="right" width={2}>
             <Flow></Flow>
          </Grid.Column> }
          {adminFlowLength > 0 && <Grid.Column textAlign="right" width={2}>
             <AdminFlow></AdminFlow>
          </Grid.Column> }
          <Grid.Column width={usersFlowLength > 0 || adminFlowLength > 0 ? 14 : 16}>
            <Route exact path="/employers"><EmployerList/></Route>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/main"><Main/></Route>
            <Route exact path="/selectregistertype"><SelectRegisterType></SelectRegisterType></Route>
            <Route exact path="/sign-in"><SignInPage></SignInPage></Route>
            <Route exact path="/sign-up"><SignUp></SignUp></Route>
            <Route exact path="/jobseekers"><JobseekerList></JobseekerList></Route>
            <Route exact path="/jobrolemanagement"><JobRoleManagement></JobRoleManagement></Route>
            <Route exact path="/jobs"><JobAdvertList></JobAdvertList></Route>
            <Route exact path="/jobadvertadd"><JobAdvertAdd></JobAdvertAdd></Route>
            <Route exact path="/jobadvertapprove"><JobAdvertApproval></JobAdvertApproval></Route>
            <Route exact path="/employer-sign-up"><EmployerSignUpPage></EmployerSignUpPage></Route>
            <Route exact path="/jobseeker-sign-up"><JobseekerSignUpPage></JobseekerSignUpPage></Route>
            <Route exact path="/favorite-job-adverts"><FavoriteJobAdverts></FavoriteJobAdverts></Route>
            <Route exact path="/my-job-adverts"><MyJobAdverts></MyJobAdverts></Route>
            <Route exact path="/business-edit-profile"><BusinessProfileEdit></BusinessProfileEdit></Route>
            <Route exact path="/add-jobadvert-by-employer"><AddJobAdvertByEmployer></AddJobAdvertByEmployer></Route>
            <Route exact path="/jobadvert-details/:advertId"><AdvertDetails></AdvertDetails></Route>
            <Route exact path="/user-profile/:userId"><UserProfile></UserProfile></Route>
            <Route exact path="/user-profile-edit"><UserProfileEdit></UserProfileEdit></Route>
            <Route exact path="/user-profile-edit/description"><UserDescriptionEdit></UserDescriptionEdit></Route>
            <Route exact path="/user-profile-edit/school"><UserSchoolEdit></UserSchoolEdit></Route>
            <Route exact path="/user-profile-edit/language"><UserLanguageEdit></UserLanguageEdit></Route>
            <Route exact path="/user-profile-edit/experience"><UserExperienceEdit></UserExperienceEdit></Route>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="mobile tablet">
        <Grid.Column width={16}>
            <Route exact path="/employers"><EmployerList/></Route>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/main"><Main/></Route>
            <Route exact path="/selectregistertype"><SelectRegisterType></SelectRegisterType></Route>
            <Route exact path="/sign-in"><SignInPage></SignInPage></Route>
            <Route exact path="/sign-up"><SignUp></SignUp></Route>
            <Route exact path="/jobseekers"><JobseekerList></JobseekerList></Route>
            <Route exact path="/jobrolemanagement"><JobRoleManagement></JobRoleManagement></Route>
            <Route exact path="/jobs"><JobAdvertList></JobAdvertList></Route>
            <Route exact path="/jobadvertadd"><JobAdvertAdd></JobAdvertAdd></Route>
            <Route exact path="/jobadvertapprove"><JobAdvertApproval></JobAdvertApproval></Route>
            <Route exact path="/employer-sign-up"><EmployerSignUpPage></EmployerSignUpPage></Route>
            <Route exact path="/jobseeker-sign-up"><JobseekerSignUpPage></JobseekerSignUpPage></Route>
            <Route exact path="/favorite-job-adverts"><FavoriteJobAdverts></FavoriteJobAdverts></Route>
            <Route exact path="/my-job-adverts"><MyJobAdverts></MyJobAdverts></Route>
            <Route exact path="/business-edit-profile"><BusinessProfileEdit></BusinessProfileEdit></Route>
            <Route exact path="/add-jobadvert-by-employer"><AddJobAdvertByEmployer></AddJobAdvertByEmployer></Route>
            <Route exact path="/jobadvert-details/:advertId"><AdvertDetails></AdvertDetails></Route>
            <Route exact path="/user-profile/:userId"><UserProfile></UserProfile></Route>
            <Route exact path="/user-profile-edit"><UserProfileEdit></UserProfileEdit></Route>
            <Route exact path="/user-profile-edit/description"><UserDescriptionEdit></UserDescriptionEdit></Route>
            <Route exact path="/user-profile-edit/school"><UserSchoolEdit></UserSchoolEdit></Route>
            <Route exact path="/user-profile-edit/language"><UserLanguageEdit></UserLanguageEdit></Route>
            <Route exact path="/user-profile-edit/experience"><UserExperienceEdit></UserExperienceEdit></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
