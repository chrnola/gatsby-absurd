import React from 'react';
import { Section, Container } from '@components/global';
import InnerHTML from 'dangerously-set-html-content';

const Request = () => (
    <Section id="request">
        <Container>
            <h1>Request a Sitting or Service Today!</h1>
            <InnerHTML html={`<script
                id="nc-booking-widget-script"
                src="https://www.neatcal.com/app/services/booking/assets/js/integrate.js?v=21.04.04.1"
                data-access-key="ccd6b05960ab7a388b98eec40613b86c"
                data-nc-root="https://www.neatcal.com/app"
                data-booking-url="https://www.neatcal.com/app/services/booking/book?u=ccd6b05960ab7a388b98eec40613b86c&widget_order=categories,all_services,staff,time&photo_mode=0&click_and_go=1&class_list_tmpl=list-1">
            </script>`}/>
        </Container>
    </Section>
);

export default Request;