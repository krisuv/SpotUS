import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import { IAnnouncement } from '../../components/Announcement/Announcement.types';

const becomeAdmin: IAnnouncement = {
  author: 'SpotUS',
  title: 'Zostań adminem',
  content: `Opinia każdego z naszych użytkowników jest dla nas bardzo ważna. 

  Chcemy tylko polepszyć naszą funkcjonalność. Jeśli masz pomysły i sugestie, jak zrobić to lepiej, napisz do nas.
  
  Z małych pomysłów zawsze powstają wielkie rzeczy i możesz nam w tym pomóc.`,
  buttonText: 'Zgłoś się'
};

const Contact = (): JSX.Element => {
  return (
    <>
      <h1>Contact</h1>
      <Announcement {...becomeAdmin} />
    </>
  );
};

export default Contact;