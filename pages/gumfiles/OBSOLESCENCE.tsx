import ParagraphLeft from '../../components/Gumfiles/ParagraphLeft';
import ParagraphRight from '../../components/Gumfiles/ParagraphRight';
import ParagraphCenter from '../../components/Gumfiles/ParagraphCenter';
import Layout from '../../components/Gumfiles/Layout';

// SPACING
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

// FONT SIZES
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
const OBSOLESCENCE = () => {
	return (
		<Layout title="OBSOLESCENCE" date="Sep 25, 2022">
			<ParagraphLeft>
				I was browsing different graphics cards the other day on Amazon, not in
				an effort to actually purchase one, but to see how easy the process
				would be.
			</ParagraphLeft>
			<ParagraphCenter>
				I&apos;m not currently in the market, but eventually I will be.
			</ParagraphCenter>
			<ParagraphRight>Eventually everyone will be...</ParagraphRight>

			<ParagraphCenter>
				The conclusion made is that I really don&apos;t understand the
				difference between a $400 card and a $500 card with the same model name
				but slightly different specs.
			</ParagraphCenter>
			<ParagraphLeft>
				More imprtantly, I don&apos;t understand why I would need the more
				expensive option over the less expensive. Is there $100 worth of
				graphics power I&apos;m missing out on if I opt lower?
			</ParagraphLeft>

			<ParagraphCenter>Would my needs even require it?</ParagraphCenter>
			<ParagraphRight>
				If I&apos;m buying now, I&apos;d want to get a head start on the race
				against obsolescence, right? Why not 7 years of assured compatiblity
				instead of just 5 or 6?
			</ParagraphRight>
			<ParagraphLeft>
				Some purchasing decisions are certainly more involved than others, and
				thankfully, hopefully, you only have to make this decision once every 5+
				years.
			</ParagraphLeft>
		</Layout>
	);
};
export default OBSOLESCENCE;
