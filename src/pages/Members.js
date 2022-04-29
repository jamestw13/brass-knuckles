import React from 'react';
// import { Link } from 'react-router-dom';

function About() {
  const members = [
    {
      status: 'current',
      name: 'Alex Bauer',
      instrument: 'Trombone',
      bio: '',
      img: '3',
    },
    {
      status: 'current',
      name: 'Dan Cross',
      instrument: 'Trumpet',
      bio: '',
      img: '5',
    },
    {
      status: 'current',
      name: 'TJ James',
      instrument: 'Trumpet',
      bio: '',
      img: '22',
    },
    {
      status: 'current',
      name: 'Jim Latimer',
      instrument: 'Percussion',
      bio: '',
      img: '55',
    },
    {
      status: 'current',
      name: 'Craig Mason',
      instrument: 'Horn',
      bio: '',
      img: '4',
    },
    {
      status: 'current',
      name: 'Karl Zelle',
      instrument: 'Tuba',
      bio: '',
      img: '1',
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
            <div className='card member' key={index}>
              <h3>{member.name}</h3>
              <h4>{member.instrument}</h4>
              <img
                className='member-image'
                src={require(`../assets/gallery-images/${member.img}.jpg`)}
                alt={`photo of ${member.name}`}
              />
            </div>
          )
        );
      })}
    </div>
  );
}

export default About;
