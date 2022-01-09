import React from 'react';
import { Section, Container } from '@components/global';
import InnerHTML from 'dangerously-set-html-content';

const Request = () => (
    <Section id="request">
        <Container>
            <h1>Request a Sitting or Service Today!</h1>

            <h3>Cancellation Policy (Effective January 1, 2022)</h3>
            <p>
                For cancellations that occur within 10 days (240 hours) of the start of a job previously agreed
                upon, we will impose a cancellation fee equal to 50% of the invoice. For jobs cancelled within
                2 days (48 hours) we will impose a cancellation fee equal to 100% of the invoice.
            </p>

            <br/>

            <h3>Holiday Rates (Effective January 1, 2022)</h3>
            <p>
                Due to increased demand, any services performed on the following six nationally recognized holidays
                will be subject to a 50% price increase:
                New Year's Day,
                Memorial Day,
                Independence Day,
                Labor Day,
                Thanksgiving Day,
                and Christmas Day
            </p>

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