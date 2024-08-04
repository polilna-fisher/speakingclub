import styles from "./bookedInfo.module.sass";
import BookedItem from "./bookedItem/bookedItem";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { meetingActions } from "../../../redux/meetingSlice";
import { baseRoute } from "../../../constants";
import { routes } from "../../../routes";
import {partActions} from "../../../redux/partSlice";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BookedInfo = () => {
  const meetingsList = useSelector((state) => state.meetings.meetingsList);
  const partList = useSelector((state) => state.parts.partsList);
  const loading = useSelector((state) => state.parts.loadingParts);
  const error = useSelector((state) => state.parts.errorParts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meetingActions.fetchMeetingsList());
    dispatch(partActions.fetchPartsList());
  }, []);

  const bookedItemsList = useMemo(() => {
    if (!!partList.length) {
      const bookedItems = partList.filter(
        (item) => !!item.booked,
        // && item.dateTime > new Date().toJSON()
      );
      return bookedItems;
    }
  }, [partList]);

  return (
    <div className={styles.booked_info_container}>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          style={{padding: "26px 0"}}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
        {!bookedItemsList?.length ? (
            <div className={styles.booked_info_no_items_container}>
              <a
                  href={`${baseRoute}${routes.schedule}`}
                  className={styles.booked_info_no_items_text}
              >
                Book your first meeting
              </a>
            </div>
        ) : (
            bookedItemsList?.map((bookedItem, i) => {
              return (
                  <SwiperSlide>
                    <BookedItem
                        key={bookedItem._id}
                        item={bookedItem}
                        color={i % 2 === 0 || 0 ? "#FFCACC" : "#D4E2D4"}
                    />
                  </SwiperSlide>
              );
            })
        )}
      </Swiper>
    </div>
  );
};

export default BookedInfo;
