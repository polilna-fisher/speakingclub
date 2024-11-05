import styles from "./bookedInfo.module.sass";
import BookedItem from "./bookedItem/bookedItem";
import {FC, useEffect, useMemo, useState} from "react";
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
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {IPart} from "../../../models/IPart";
import {userActions} from "../../../redux/userSlice";

interface IModalMeeting {
    [key: string]: JSX.Element;
}

const BookedInfo:FC = () => {
    const bookedPartsInfo = useAppSelector((state) => state.parts.bookedPartsInfo);
    const bookedPartList = useAppSelector((state) => state.user.user?.bookedParts);
    const partsList = useAppSelector((state) => state.parts.partsList);
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState<null | string>(null);
    const [modalData, setModalData] = useState<null | IPart>(null)

    const openModal = (info: {type: string, data: IPart}):void => {
        setModalData(info.data)
        setModal(info.type)
    }

    const modalMeeting: IModalMeeting = {
        Part: <PartModal  part={modalData}  />,
    };

    const list = useMemo(() => {
        const hash = partsList.reduce((acc, el) => {
                acc[el._id] = el
            return acc
        }, {} as { [key: string]: IPart })

        return bookedPartList?.map(id => hash[id]) || []
    }, [partsList, bookedPartList])


    return (
        <div className={styles.booked_info_container}>

            {!list?.length
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
                            list?.map((bookedItem, i) => {
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
                {modal && modalMeeting[modal]}
            </Modal>
        </div>
    )
        ;
};

export default BookedInfo;


