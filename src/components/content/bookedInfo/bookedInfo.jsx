import styles from "./bookedInfo.module.sass";
import BookedItem from "./bookedItem/bookedItem";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {meetingActions} from "../../../redux/meetingSlice";
import {baseRoute} from "../../../constants";
import {routes} from "../../../routes";
import {partActions} from "../../../redux/partSlice";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import  'swiper/css'
import './swiper.css'
import 'swiper/css/pagination';
import PartModal from "../mainContainer/schedule/partModal/partModal";
import Modal from "../../modal/modal";

const BookedInfo = () => {
    const partList = useSelector((state) => state.parts.partsList);
    const bookedPartList = useSelector((state) => state.parts.bookedParts);
    const loading = useSelector((state) => state.parts.loadingParts);
    const error = useSelector((state) => state.parts.errorParts);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(null);
    const [modalData, setModalData] = useState([])

    const openModal = (info) => {
        console.log(bookedPartList, 'bookes')
        setModalData(info.data)
        setModal(info.type)
    }

    const modalMeeting = {
        Part: <PartModal  part={modalData}  />,
    };

    useEffect(() => {
        dispatch(meetingActions.fetchMeetingsList());
        dispatch(partActions.fetchPartsList());
        dispatch(partActions.fetchBookingPartSuccess());
    }, []);

    useEffect(() => {
        dispatch(partActions.fetchBookingPartSuccess());
    }, [partList]);

    return (
        <div className={styles.booked_info_container}>

            {!bookedPartList?.length
                ? (
                    <div className={styles.booked_info_no_items_container}>
                        <a
                            href={`${baseRoute}${routes.schedule}`}
                            className={styles.booked_info_no_items_text}
                        >
                            Book your first meeting
                        </a>
                    </div>
                )
                : (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{ clickable: true }}
                        slidesPerView={3}>
                        {
                            bookedPartList?.map((bookedItem, i) => {
                                return (
                                    <SwiperSlide key={bookedItem._id}>
                                        <BookedItem
                                            key={bookedItem._id}
                                            item={bookedItem}
                                            color={i % 2 === 0 || 0 ? "#FFCACC" : "#D4E2D4"}
                                            openModal={openModal}
                                        />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                )
            }
            <Modal modal={!!modal} setModal={() => setModal(null)}>
                {modalMeeting[modal]}
            </Modal>
        </div>
    )
        ;
};

export default BookedInfo;


