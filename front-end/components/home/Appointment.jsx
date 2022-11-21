import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import { BookContext } from '../../contexts/BookContext';
import { RiEditBoxLine } from 'react-icons/ri';
import { TIME, LIST_PRICES } from '../../assets/data';

const Appointment = () => {
    const {
        bookState: { isBookSuccess },
        showBookSuccess,
        showBookFail,
        addBooking,
    } = useContext(BookContext);

    const [date, setDate] = useState('');
    const [errDate, setErrDate] = useState(false);

    const [time, setTime] = useState('Time');
    const [errTime, setErrTime] = useState(false);
    const [openTime, setOpenTime] = useState(false);

    const [service, setService] = useState('Service');
    const [errService, setErrService] = useState(false);
    const [openService, setOpenService] = useState(false);

    const [name, setName] = useState('');

    const [employee, setEmployee] = useState('');
    const [errEmployee, setErrEmployee] = useState(false);

    const [phone, setPhone] = useState('');
    const [errPhone, setErrPhone] = useState(false);

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !date ||
            time === 'Time' ||
            service === 'Service' ||
            !phone ||
            !employee
        ) {
            if (!date) setErrDate(true);
            if (time === 'Time') setErrTime(true);
            if (!phone) setErrPhone(true);
            if (service === 'Service') setErrEmployee(true);
            if (!employee) setErrService(true);
        } else {
            const infoCustomer = {
                set_date: date,
                set_hour: time,
                service: service,
                phone_number: phone,
                employee: employee,
            };
            const { success, data } = await addBooking(infoCustomer);
            if (success) {
                showBookSuccess(true);
                setTimeout(() => {
                    showBookSuccess(false);
                }, 3000);
            } else {
                showBookFail(true);
                setTimeout(() => {
                    showBookFail(false);
                }, 3000);
            }

            setDate('');
            setTime('Time');
            setService('Service');
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
            setEmployee('');

            setErrDate(false);
            setErrTime(false);
            setErrPhone(false);
            setErrService(false);
            setErrService(false);
        }
    };

    return (
        <section
            id="appointment"
            className="flex items-center flex-col max-w-[1140px] pt-[140px] mx-4 md:mx-6 lg:mx-10 xl:mx-auto"
        >
            <h2 className="text-4xl font-bold text-white uppercase tracking-wide relative mb-16 before:absolute before:content before:h-[3px] before:w-[12%] before:-bottom-3 before:left-0 before:bg-textColor after:absolute after:content after:h-[3px] after:w-[12%] after:-bottom-3 after:right-0 after:bg-textColor">
                Appointment
            </h2>
            <div className="w-full h-full flex items-center flex-col lg:flex-row mt-5 mb-10">
                <div className="w-full lg:w-[50%] lg:px-[15px]">
                    <h3 className="text-2xl text-textColor tracking-wide font-medium mb-8">
                        OPENING TIME
                    </h3>
                    <div className="w-full h-full flex items-center justify-between mb-7">
                        <p className="text-sm text-white tracking-wide">
                            Monday to Wednesday
                        </p>
                        <p className="text-sm text-white tracking-wide">
                            07:00 am - 22:00 pm
                        </p>
                    </div>
                    <div className="w-full h-full flex items-center justify-between mb-7">
                        <p className="text-sm text-white tracking-wide">
                            Friday
                        </p>
                        <p className="text-sm text-white tracking-wide">
                            07:00 am - 22:00 pm
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] lg:px-[15px]">
                    <h3 className="text-2xl text-textColor tracking-wide font-medium mb-8">
                        CLOSING TIME
                    </h3>
                    <div className="w-full h-full flex items-center justify-between mb-7">
                        <p className="text-sm text-white tracking-wide">
                            Monday to Wednesday
                        </p>
                        <p className="text-sm text-white tracking-wide">
                            12:00 am - 14:00 pm
                        </p>
                    </div>
                    <div className="w-full h-full flex items-center justify-between mb-7">
                        <p className="text-sm text-white tracking-wide">
                            Sunday
                        </p>
                        <p className="text-sm text-white tracking-wide">
                            Weekend
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <form className="w-full h-full flex items-center justify-center flex-col">
                    <div className="w-full flex items-center justify-center flex-col lg:flex-row">
                        <div className="w-full lg:w-[25%] lg:px-[15px] relative">
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                                placeholder="Date"
                                className="w-full p-1 pl-[25px] mb-[40px] placeholder:text-textColor text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6"
                            />
                            {errDate && !date && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.5,
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-3 left-0"
                                >
                                    <p className="text-sm text-red-500 pl-[40px]">
                                        Date is required
                                    </p>
                                </motion.div>
                            )}
                        </div>
                        <div className="w-full lg:w-[25%] lg:px-[15px] relative">
                            <div
                                onClick={() => setOpenTime(!openTime)}
                                className="w-full h-[38px] px-[25px] mb-[40px] flex items-center appearance-none text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6 relative"
                            >
                                {time}
                            </div>
                            <span className="text-sm font-light text-textColor absolute top-[12px] right-[40px]">
                                <RiEditBoxLine />
                            </span>
                            {errTime && time === 'Time' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.5,
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-3 left-0"
                                >
                                    <p className="text-sm text-red-500 pl-[40px]">
                                        Time is required
                                    </p>
                                </motion.div>
                            )}
                            {openTime && (
                                <div className="w-full absolute top-[40px] left-0 z-10">
                                    <ul className="lg:mx-[15px] text-white bg-textColor border-[3px] border-textColor max-h-[200px] overflow-y-auto">
                                        {TIME.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    setTime(item);
                                                    setOpenTime(!openTime);
                                                }}
                                                className="px-[25px] cursor-pointer hover:bg-bgColor hover:text-textColor"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="w-full lg:w-[25%] lg:px-[15px] relative">
                            <div
                                onClick={() => setOpenService(!openService)}
                                className="w-full h-[38px] px-[25px] mb-[40px] flex items-center appearance-none text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6 relative"
                            >
                                {service}
                            </div>
                            <span className="text-sm font-light text-textColor absolute top-[12px] right-[40px]">
                                <RiEditBoxLine />
                            </span>
                            {errService && service === 'Service' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.5,
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-3 left-0"
                                >
                                    <p className="text-sm text-red-500 pl-[40px]">
                                        Service is required
                                    </p>
                                </motion.div>
                            )}
                            {openService && (
                                <div className="w-full absolute top-[40px] left-0 z-10">
                                    <ul className="lg:mx-[15px] text-white bg-textColor border-[3px] border-textColor max-h-[200px] overflow-y-auto">
                                        {LIST_PRICES.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    setService(item.title);
                                                    setOpenService(
                                                        !openService,
                                                    );
                                                }}
                                                className="px-[25px] cursor-pointer hover:bg-bgColor hover:text-textColor"
                                            >
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="w-full lg:w-[25%] lg:px-[15px] relative">
                            <input
                                type="text"
                                name="date"
                                value={employee}
                                onChange={(e) => {
                                    setEmployee(e.target.value);
                                }}
                                placeholder="Employee"
                                className="w-full p-1 pl-[25px] mb-[40px] placeholder:text-textColor text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6"
                            />
                            {errEmployee && !employee && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.5,
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-3 left-0"
                                >
                                    <p className="text-sm text-red-500 pl-[40px]">
                                        Employee is required
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col lg:flex-row">
                        <div className="w-full lg:flex-1 lg:px-[15px] relative">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                placeholder="Phone"
                                className="w-full p-1 pl-[25px] mb-[40px] placeholder:text-textColor text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6"
                            />
                            {errPhone && !phone && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.5,
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-3 left-0"
                                >
                                    <p className="text-sm text-red-500 pl-[40px]">
                                        Phone is required
                                    </p>
                                </motion.div>
                            )}
                        </div>
                        <div className="w-full lg:flex-1 lg:px-[15px] relative">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="Name"
                                className="w-full p-1 pl-[25px] mb-[40px] placeholder:text-textColor text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6"
                            />
                        </div>

                        <div className="w-full lg:flex-1 lg:px-[15px]">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email"
                                className="w-full p-1 pl-[25px] mb-[40px] placeholder:text-textColor text-textColor bg-transparent border-[3px] border-textColor text-sm leading-6"
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-start justify-center flex-col lg:flex-row">
                        <div className="w-full lg:flex-1 lg:px-[15px]">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full min-h-[180px] p-[25px] mb-[30px] resize-none bg-transparent border-[3px] border-textColor text-textColor placeholder:text-textColor"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <div className="w-full lg:flex-1 lg:px-[15px]">
                            <button
                                onClick={(e) => handleSubmit(e)}
                                className="w-full min-h-[180px] mb-[40px] text-white text-2xl font-medium uppercase bg-textColor border-[3px] border-textColor hover:text-textColor hover:bg-transparent transition-all duration-[400ms] ease-in-out"
                            >
                                Book now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Appointment;
