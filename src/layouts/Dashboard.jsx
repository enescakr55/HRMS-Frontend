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
export default function Dashboard() {
  const location = useLocation();
  console.log(location.pathname);
  const usersFlow = ["/employers","/jobseekers","/","/main","/jobs","/favorite-job-adverts"];
  const adminFlow = ["/jobrolemanagement","/jobadvertadd","/jobadvertapprove"];
  const usersFlowLength = usersFlow.filter(p=>p==location.pathname).length;
  const adminFlowLength = adminFlow.filter(p=>p==location.pathname).length;
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
