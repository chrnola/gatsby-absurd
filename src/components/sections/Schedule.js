import React from 'react';
import { Helmet } from 'react-helmet';

const Schedule = () => (
    <Helmet>
        <script
            id="nc-booking-widget-script"
            src="https://www.neatcal.com/app/services/booking/assets/js/integrate.js"
            data-access-key="ccd6b05960ab7a388b98eec40613b86c"
            data-nc-root="https://www.neatcal.com/app"
            data-booking-url="https://www.neatcal.com/app/services/booking/book?u=ccd6b05960ab7a388b98eec40613b86c&widget_order=categories,resources,date&photo_mode=0&click_and_go=1&class_list_tmpl=list-1"></script>
    </Helmet>
);

export default Schedule;