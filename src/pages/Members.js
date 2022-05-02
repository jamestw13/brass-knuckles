import React from 'react';
// import { Link } from 'react-router-dom';

function About() {
  const members = [
    {
      status: 'current',
      name: 'Alex Bauer',
      instrument: 'Trombone',
      bio: `Trombonist Alex Bauer is a native of Middleton, Wisconsin. He attended the University of
      Wisconsin-Madison, where he studied trombone under Mark Hetzler, and graduated with a
      Bachelor of Music degree in 2007. His musical tastes and endeavors span a wide variety of
      genres, from renaissance to country, baroque to punk rock (once played in a Green Day cover
      band, with a boxing glove on the end of the trombone slide), classical to jazz and salsa. This
      makes Brass Knuckles diversity of repertoire a perfect fit! In addition to the Knuckles, Alex has
      performed with and continues to regularly perform with an array of Madison’s finest musicians,
      including Madison Jazz Orchestra, Orquesta MAS – Madison All Stars, Orquesta SalSoul Del
      Mad, Capitol City Theatre, Lo Marie, Neophonic Jazz Orchestra, the Darren Sterud Jazz
      Orchestra, and many others. By day, he is an insurance agent with local independent agency
      Hausmann Group. He and his partner Lauren have three cats; she is a little nervous about them
      outnumbering the humans, but they have yet to stage a coup.`,
      img: 'alex-bauer',
    },
    {
      status: 'current',
      name: 'Dan Cross',
      instrument: 'Trumpet',
      bio: 'Coming soon',
      img: 'dan-cross',
    },
    {
      status: 'current',
      name: 'TJ James',
      instrument: 'Trumpet',
      bio: 'Coming soon',
      img: 'tj-james',
    },
    {
      status: 'current',
      name: 'Jim Latimer',
      instrument: 'Percussion',
      bio: 'Coming Soon',
      img: 'jim-latimer',
    },
    {
      status: 'current',
      name: 'Craig Mason',
      instrument: 'Horn',
      bio: 'Craig has taught and conducted many wind bands, brass bands, choirs, theater productions, pit orchestras, music theory courses, jazz ensembles, marching bands, drum and bugle corps, and chamber ensembles in public and private schools, as well as at the university, collegiate, and adult level. He also is a published composer and arranger, writes marching band drills for programs throughout the Midwest, is involved as a teacher and music arranger for the Madison Scouts alumni, and is an active performer with the Brass Knuckles Brass Quintet, the Craig Mason Combo and local orchestras and pit orchestras.',
      img: 'craig-mason',
    },
    {
      status: 'current',
      name: 'Karl Zelle',
      instrument: 'Tuba',
      bio: 'Coming soon',
      img: 'karl-zelle',
    },
    {
      status: 'honorary',
      name: '',
      instrument: '',
      bio: '',
      img: '',
    },
    {
      status: 'honorary',
      name: '',
      instrument: '',
      bio: '',
      img: '',
    },
  ];
  return (
    <div className='page'>
      <h1 className='page-header'>Members</h1>
      {members.map((member, index) => {
        return (
          member.status === 'current' && (
            <>
              <div className='card member-card' key={index}>
                <h3 className='member-name'>
                  {member.name}
                  <span className='member-instrument'>{member.instrument}</span>
                </h3>
                <img
                  className='member-image'
                  src={require(`../assets/member-images/${member.img}.jpg`)}
                  alt={`photo of ${member.name}`}
                />
                <p className='member-bio'>{member.bio}</p>
              </div>
            </>
          )
        );
      })}
    </div>
  );
}

export default About;
