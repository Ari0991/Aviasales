import React from 'react';

import classes from './Card.module.scss';

const Card = () => {
  return (
    <li className={classes['tickets__list-item']}>
      <div className={classes['card']}>
        <div className={classes['card__price']}>Price</div>
        <div className={classes['card__logo']}></div>
        <ul className={classes['card__info']}>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>MOW - HKT</div>
            <div className={classes['card__info-item-description']}>10:45 – 08:00</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>В пути</div>
            <div className={classes['card__info-item-description']}>21ч 15м</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>2 пересадки</div>
            <div className={classes['card__info-item-description']}>HKG, JNB</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>HKT - MOW</div>
            <div className={classes['card__info-item-description']}>11:20 – 00:50</div>
          </li>
          <li className={classes['card__info-item']}>
            {' '}
            <div className={classes['card__info-item-title']}>В пути</div>
            <div className={classes['card__info-item-description']}>21ч 15м</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>2 пересадки</div>
            <div className={classes['card__info-item-description']}>HKG, JNB</div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
