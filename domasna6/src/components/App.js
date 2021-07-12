import React, { useEffect, useState } from "react";
import {Albums} from "./Albums";
import {Nav} from "./Nav";
import {Posts} from "./Posts.js";
import {Switch,Route} from "react-router-dom";
import { Gallery } from "./Gallery";
import { API_URL } from "../constants";
export function App(){
  const [posts,setPosts]=useState([]);
  const [photos,setPhotos]=useState([]);
  const [selectedImage,setSelectedImage]=useState('');
  function openPhoto(photoUrl){
    setSelectedImage(photoUrl);
  }
  function closePhoto(){
    setSelectedImage("");
  }
  useEffect(()=>{
    fetch(`${API_URL}/posts`)
    .then(res=>res.json())
    .then(json=>setPosts(json))
    .catch(err=>alert(err))
    fetch(`${API_URL}/photos`)
    .then(res=>res.json())
    .then(json=>setPhotos(json))
    .catch(err=>alert(err))
  },[]);
  return(
    <div>
    <Nav/>
    <Switch>
      <Route path="/albums" component={Albums}/>
      <Route path="/posts" render={()=>{return <Posts postList={posts}/>}}/>
      <Route path="/gallery" render={()=>{return <Gallery photoList={photos} openPhoto={openPhoto} selectedImage={selectedImage} closePhoto={closePhoto}/>}}/>
    </Switch>
    </div>
  )
}