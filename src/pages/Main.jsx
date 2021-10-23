import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Icon, Image,Button, Grid} from 'semantic-ui-react'

export default function Main() {
    return (
        <div>
                    <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
            fontWeight: "bold",
            color:"#2185d0"
          }}
        >
         <Icon name="home" size="big"></Icon> Anasayfa
        </p>
        <div style={{textAlign:"center"}}>
            <Grid stackable>
                <Grid.Row columns={3}>

                    <Grid.Column>
                        <Link to="/employers"><div className="mainListDiv">
                            <Icon name="building" size="massive"></Icon>
                            <br/>
                            <p style={{fontSize:"20px",fontWeight:"bold"}}>Şirketleri Görüntüle</p>
                        </div></Link>


                    </Grid.Column>
                    <Grid.Column>
                        <div></div>
                    <Link to="/jobs"><div className="mainListDiv">
                            <Icon name="list alternate" size="massive"></Icon>
                            <br/>
                            <p style={{fontSize:"20px",fontWeight:"bold"}}>İş İlanlarını Görüntüle</p>
                        </div></Link>
                    </Grid.Column>
                    <Grid.Column>
                    <Link to="/jobseekers"><div className="mainListDiv">
                            <Icon name="users" size="massive"></Icon>
                            <br/>
                            <p style={{fontSize:"20px",fontWeight:"bold"}}>İş Arayanları Görüntüle</p>
                        </div></Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        </div>
    )
}
