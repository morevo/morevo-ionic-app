import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
  IonText,
  IonButton,
  IonIcon,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./css/index.css";
import "./images/man-removebg-preview.png";

/* Theme variables */
import "./theme/variables.css";
import { setUncaughtExceptionCaptureCallback } from "process";
const App: React.FC = () => {
  const [date, setDate] = useState("ДД");
  const [time, setTime] = useState("ЧЧ-ММ");
  /* Change dates */
  let changeDate = () => {
    let dates = new Date().getDate();
    setDate(`${dates}`);
  };

  let changeDateSecond = () => {
    let dates = new Date().getDate() - new Date().getDate() + 1;
    setDate(`${dates}`);
  };

  let changeDateThird = () => {
    let dates = new Date().getDate() - new Date().getDate() + 2;
    setDate(`${dates}`);
  };

  let changeDateFourth = () => {
    let dates = new Date().getDate() - new Date().getDate() + 3;
    setDate(`${dates}`);
  };

  let changeTime = () => {
    let times = `${new Date().getHours()}:00`;
    setTime(`${times}`);
  };

  let changeTimeSecond = () => {
    let times = `${new Date().getHours() + 1}:00`;
    setTime(`${times}`);
  };

  let changeTimeThird = () => {
    let times = `${new Date().getHours() + 2}:00`;
    setTime(`${times}`);
  };

  let changeTimeFourth = () => {
    let times = `${new Date().getHours() + 3}:30`;
    setTime(`${times}`);
  };

  return (
    <IonApp>
      <IonHeader className="header ion-text-center ion-no-border">
        <IonToolbar className="header__toolbar">
          <IonTitle
            size="large"
            className="header__title ion-text-center"
            color="dark"
          >
            Алексей Карачинский
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem className="ion-about ion-no-padding">
          <IonAvatar className="ion-avatar-man" slot="start">
            <IonImg className="ion-img-man">
              <img src="images/man-removebg-preview.png" alt="" />
            </IonImg>
          </IonAvatar>
          <IonLabel>
            <IonText color="medium">
              <p className="item__text ion-text-center">
                Длительность <br /> консультации <br />
                <span className="text__delay__style">50 минут</span>
              </p>
            </IonText>
          </IonLabel>
        </IonItem>

        <IonItem className="possible__date ion-no-padding ion-justify-content-between ion-no-border">
          <IonText color="medium" className="possible__text">
            Возможная дата
          </IonText>

          <IonItem className="icons">
            <IonButton
              className="icons__size"
              expand="block"
              fill="clear"
              shape="round"
            >
              <IonIcon
                className="icons__first icons__both"
                name="grid-outline"
                color="medium"
              ></IonIcon>
            </IonButton>

            <IonButton
              className="icons__size"
              expand="block"
              fill="clear"
              shape="round"
            >
              <IonIcon
                className="icons__second icons__both"
                name="calendar-outline"
                color="medium"
              ></IonIcon>
            </IonButton>
          </IonItem>
        </IonItem>

        <IonItem className="main__inner ion-no-padding">
          <IonList>
            <IonItemSliding>
              <IonItem className="date__items">
                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeDate()}
                >
                  <IonText className="date__button-possible-style">
                    {" "}
                    Сегодня <br />{" "}
                    <span className="date__button-number">
                      {new Date().getDate()}
                    </span>
                  </IonText>
                </IonButton>

                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeDateSecond()}
                >
                  <IonText className="date__button-possible-style">
                    {" "}
                    Ср <br />{" "}
                    <span className="date__button-number">
                      {new Date().getDate() - new Date().getDate() + 1}
                    </span>
                  </IonText>
                </IonButton>

                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeDateThird()}
                >
                  <IonText className="date__button-possible-style">
                    {" "}
                    Чт <br />{" "}
                    <span className="date__button-number">
                      {new Date().getDate() - new Date().getDate() + 2}
                    </span>
                  </IonText>
                </IonButton>

                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeDateFourth()}
                >
                  <IonText className="date__button-possible-style">
                    {" "}
                    Пт <br />{" "}
                    <span className="date__button-number">
                      {new Date().getDate() - new Date().getDate() + 3}
                    </span>
                  </IonText>
                </IonButton>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption
                  color="transparrent"
                  onClick={() => "favorite(item)"}
                ></IonItemOption>
                <IonItemOption
                  color="transparrent"
                  onClick={() => "share(item)"}
                ></IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="end">
                <IonItemOption
                  color="transparrent"
                  onClick={() => "unread(item)"}
                ></IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonList>
        </IonItem>
        <IonItem className="free__date ion-no-padding">
          <IonText color="medium">Свободное время</IonText>
        </IonItem>
        <IonItem className="date__button-free ion-no-padding">
          <IonList>
            <IonItemSliding>
              <IonItem>
                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeTime()}
                >
                  <IonText className="date__free-time">{`${new Date().getHours()}:00`}</IonText>
                </IonButton>
                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeTimeSecond()}
                >
                  <IonText className="date__free-time">{`${
                    new Date().getHours() + 1
                  }:00`}</IonText>
                </IonButton>
                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeTimeThird()}
                >
                  <IonText className="date__free-time">{`${
                    new Date().getHours() + 2
                  }:00`}</IonText>
                </IonButton>
                <IonButton
                  className="date__button"
                  color="dark"
                  expand="block"
                  fill="clear"
                  shape="round"
                  onClick={() => changeTimeFourth()}
                >
                  <IonText className="date__free-time">{`${
                    new Date().getHours() + 3
                  }:30`}</IonText>
                </IonButton>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption
                  color="transparrent"
                  onClick={() => "favorite(item)"}
                ></IonItemOption>
                <IonItemOption
                  color="transparrent"
                  onClick={() => "share(item)"}
                ></IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="end">
                <IonItemOption
                  color="transparrent"
                  onClick={() => "unread(item)"}
                ></IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonList>
        </IonItem>

        <IonItem className="dates__state">
          <IonItem className="date__state ion-text-center">
            <IonText color="dark" className="date__state-text">
              <p className="dates__state-common">
                Дата <br /> <span className="date__state-style">{date}</span>
              </p>
            </IonText>
          </IonItem>
          <IonItem className="date__state ion-text-center">
            <IonText color="dark" className="date__state-text">
              <p className="dates__state-common">
                Время <br /> <span className="date__state-style">{time}</span>
              </p>
            </IonText>
          </IonItem>
        </IonItem>
        <IonItem className="date__state-button ion-no-padding">
          <IonButton
            expand="block"
            fill="solid"
            color="secondary"
            size="default"
          >
            Записаться на бесплатную встречу
          </IonButton>
        </IonItem>
      </IonContent>
    </IonApp>
  );
};

export default App;
