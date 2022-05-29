import React from "react";
import style from "./PeopleList.module.css";
function PeopleList({ people }) {
  return (
    <>
      <div className={style.peopleContainer}>
        <h3>{people.length} birdays today</h3>
        {people.map((person) => {
          return (
            <div key={person.id} style={{ display: "flex", alignItems: "center", marginTop: '10px' }}>
              <img className={style.avatar}src={person.image} width="40" height="40" alt="user" />
              <div className={style.userInfoContainer}>
                <h4 >
                  {person.firstName} {person.lastName}
                </h4>
                <span>{person.age} years</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PeopleList;
