import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
	return (
		<>
			<footer>
				<div className="container">
					<div className="footer-content gap-5 md:gap-10">
						<ul className="footer-content__1">
							<li>
								<span>Dampit Trans</span> Solo
							</li>
							<li>
								Dampit Trans Solo, the leading car rental in Solo, offers
								affordable prices and extensive experience with thousands of
								successful trips.
							</li>
							<li>
								<a href="tel: +6281212926365" className="flex gap-3">
									<IconPhoneCall /> &nbsp; (+62) 812-1292-6365 (Nunik)
								</a>
								<br />
								<a href="tel: +6282136488824" className="flex gap-3">
									<IconPhoneCall /> &nbsp; (+62) 821-3648-8824 (Wied)
								</a>
							</li>

							<li>
								<a
									href="mailto: nunikkembar.nk@gmail.com"
									className="flex gap-3">
									<IconMail />
									&nbsp; nunikkembar.nk@gmail.com
								</a>
							</li>
						</ul>

						<ul className="footer-content__2">
							<li>Quick Links</li>
							<li>
								<a href="/">Homepage</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
						</ul>

						<ul className="footer-content__2">
							<li>Working Hours</li>
							<li>Mon - Sun: 5:00AM - 10:00PM</li>
						</ul>

						<ul className="footer-content__2 mx-auto">
							<li>Address</li>
							<li>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.003945292506!2d110.77274617476364!3d-7.5745471924396925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a151b0ada830f%3A0xc09b4ee050473823!2sDampit%20Trans%20Rental%20Mobil%20Solo!5e0!3m2!1sen!2sid!4v1705850287319!5m2!1sen!2sid"
									width="300"
									height="200"
									style={{ border: "0" }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Google Maps"></iframe>
							</li>
						</ul>
					</div>
					<li
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "flex-end",
						}}>
						<span style={{ fontSize: "14px" }}>
							&copy; Dampit Trans Solo 2024. All rights reserved.
						</span>
					</li>
				</div>
			</footer>
		</>
	);
}

export default Footer;
