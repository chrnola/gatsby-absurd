import React from 'react';
import { Section, Container } from '@components/global';
import InnerHTML from 'dangerously-set-html-content';

const Schedule = () => (
    <Section id="schedule">
        <Container>
            <h1>Schedule an Appointment</h1>
            <InnerHTML html={`<script
                id="nc-booking-widget-script"
                src="https://www.neatcal.com/app/services/booking/assets/js/integrate.js"
                data-access-key="ccd6b05960ab7a388b98eec40613b86c"
                data-nc-root="https://www.neatcal.com/app"
                data-booking-url="https://www.neatcal.com/app/services/booking/book?u=ccd6b05960ab7a388b98eec40613b86c&widget_order=categories,resources,date&photo_mode=0&click_and_go=1&class_list_tmpl=list-1">
            </script>`}/>
        </Container>
    </Section>
);

export default Schedule;