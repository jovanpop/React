import React from 'react';
import {Movies} from './Movies';

let movie1={
  name:"Terminator 2: Judgment Day",
  genre:"Action",
  date:1991,
  plot:"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.",
  link:<a href="https://www.imdb.com/title/tt0103064/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie2={
  name:"Matrix",
  genre:"Action, Sci-Fi",
  date:1999,
  plot:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
  link:<a href="https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_2" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://flxt.tmsimg.com/assets/p22804_p_v10_ab.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie3={
  name:"Inception",
  genre:"Adventure, Sci-fi",
  date:2010,
  plot:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  link:<a href="https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie4={
  name:"American Pie",
  genre:"Comedy",
  date:1999,
  plot:"Four teenage boys enter a pact to lose their virginity by prom night.",
  link:<a href="https://www.imdb.com/title/tt0163651/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://flxt.tmsimg.com/assets/p23343_p_v10_ab.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movie5={
  name:"Shutter Island",
  genre:"Mistery, Thriller",
  date:2010,
  plot:"In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
  link:<a href="https://www.imdb.com/title/tt1130884/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">Link</a>,
  img:<img src="https://flxt.tmsimg.com/assets/p3531967_p_v13_aj.jpg" width="100px" height="auto" alt="Not Found"></img>
}

let movies=[movie1,movie2,movie3,movie4,movie5]

export function App (){
  return(
    <Movies movies={movies}/>
  )
}