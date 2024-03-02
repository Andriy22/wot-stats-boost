import { Divider } from '@nextui-org/react';

export default function FarmSilverFAQ() {
	return (
		<article className='format lg:format-lg dark:format-invert'>
			<p className='text-xl'>The best tanks for silver farming:</p>
			<ul className='list-disc'>
				<li>
					<strong>HT</strong> – BZ-176, M54 Renegade, Obj. 703 II, M6A2E1, AMX
					M4 mle.49, Somua SM, Škoda T 56, E 75 TS
				</li>
				<li>
					<strong>MT</strong> – Lorraine 40t, ASTRON Rex 105 mm, Progetto 46,
					AMBT, M47 Iron Arnie, T44-100, Bat.-Châtillon Bourrasque
				</li>
				<li>
					<strong>TD</strong> – Rheinmetall Skorpion G,WZ-120-1G FT, SU-130,
					TS-5, ИСУ-130, Turtle Mk. I, Type 5 Ka-Ri, ShPTK-TVP 100, Strv S1
				</li>
				<li>
					<strong>LT</strong> – EBR 75, Lt-432, ELC EVEN 90, FV1066 Senlac
				</li>
			</ul>
			<Divider />
			<p className='text-xl'>Essential conditions:</p>
			<ul className='list-disc'>
				<li>Active premium account</li>
				<li>Your crew should have 100% level of Skills</li>
				<li>
					There must be enough silver to set the necessary parts, or enough gold
					to rearrange the parts, taking them from the other tank, if the order
					executor needs it
				</li>
				<li>Ability to retrain the crew, if needed</li>
			</ul>
		</article>
	);
}
