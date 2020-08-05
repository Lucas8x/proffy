import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string
    subject: string;
    whatsapp: string;
}

interface TeacherProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
  function createnewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createnewConnection}
          href={`https://wa.me/${teacher.whatsapp}`
        }>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;
