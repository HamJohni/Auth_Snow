import qr from './Qr.module.scss'

import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';
import moment from 'moment';



const Qr = () => {
    const [scannedTime, setScannedTime] = useState('');

    const handleScan = (data) => {
        if (data) {
            const scannedTime = moment().format('YYYY-MM-DD HH:mm:ss');
            setScannedTime(scannedTime);
        }
    }

    const handleError = (err) => {
        console.error(err);
    }

    return(
        <section className={qr.qr}>
            Салам мир

            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}/>

            {scannedTime && (
                <p>Scanned time: {scannedTime}</p>
            )}

        </section>
    )
}

export default Qr