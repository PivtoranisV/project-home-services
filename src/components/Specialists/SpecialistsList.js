import React from 'react';
import styles from './SpecialistsList.module.css';

const SpecialistsList = ({ specialists }) => {
  return (
    <div>
      <h1>Our professionals</h1>
      <ul className={styles.specialists}>
        {specialists.map((specialist) => (
          <li key={specialist._id} className={styles.item}>
            <div>
              <img src={specialist.imageUrl} alt={specialist.name} />
            </div>
            <h2>{specialist.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialistsList;
