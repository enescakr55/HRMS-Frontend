import React from "react";
import { Button, Grid, Feed, Card } from "semantic-ui-react";
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
export default function Dashboard() {
  const location = useLocation();
  console.log(location.pathname);
  const usersFlow = ["/employers","/jobseekers","/","/main","/jobs"]; 
  const adminFlow = ["/jobrolemanagement"];
  const usersFlowLength = usersFlow.filter(p=>p==location.pathname).length;
  const adminFlowLength = adminFlow.filter(p=>p==location.pathname).length;
  return (
    
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          
        {usersFlowLength > 0 && <Grid.Column textAlign="right" width={2}>
             <Flow></Flow>
          </Grid.Column> }
          {adminFlowLength > 0 && <Grid.Column textAlign="right" width={2}>
             <AdminFlow></AdminFlow>
          </Grid.Column> }
          <Grid.Column width={usersFlowLength > 0 || adminFlowLength > 0 ? 14 : 16}>
            <Route exact path="/employers"><EmployerList/></Route>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/selectregistertype"><SelectRegisterType></SelectRegisterType></Route>
            <Route exact path="/sign-in"><SignInPage></SignInPage></Route>
            <Route exact path="/sign-up"><EmployerSignUpPage></EmployerSignUpPage></Route>
            <Route exact path="/jobseekers"><JobseekerList></JobseekerList></Route>
            <Route exact path="/jobrolemanagement"><JobRoleManagement></JobRoleManagement></Route>
            <Route exact path="/jobs"><JobAdvertList></JobAdvertList></Route>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </div>
  );
}
