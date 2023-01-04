import { useEffect, useState } from "react";

// при загрузке (и каждой перезагрузке) страницы приложение получает текущее время от сервиса worldtimeapi
// это сделано для того, чтобы синхронизировать текущее время у всех участников аукциона

// чтобы не запрашивать время у сервера каждую секунду, мы сравниваем и запоминаем,
// насколько локальное время на устройстве текущего пользователя отличается от времени сервера

// в дальнейшем таймер будет отталкиваться от локального времени устройство пользователя,
// но применяя к нему отклонение от времени на сервере, который выступает как арбитр для всех пользователей

// так как setTimeout не гарантирует задержку ровно в 1 секунду,
// то за какое-то время может накопиться отклонение в отсчете таймера
// поэтому после каждого цикла таймера мы снова запрашиваем время у сервиса,
// чтобы скорректировать его у всех участников аукциона

export default function getTimeDifference(countdownEnd) {
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    (async function getServerTime() {
      try {
        const response = await fetch(
          "http://worldtimeapi.org/api/timezone/Europe/Moscow"
        );

        const { datetime } = await response.json();

        const serverTime = new Date(datetime).getTime();

        const serverTimeDifference = new Date().getTime() - serverTime;

        setDifference(serverTimeDifference);
      } catch (e) {
        console.log("no internet connection or something went wrong");
      }
    })();
  }, [countdownEnd]);

  return difference;
}
