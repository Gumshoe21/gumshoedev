import ParagraphLeft from '../../components/Gumfiles/ParagraphLeft';
import ParagraphRight from '../../components/Gumfiles/ParagraphRight';
import ParagraphCenter from '../../components/Gumfiles/ParagraphCenter';
import Layout from '../../components/Gumfiles/Layout';

const EXPERTISE = () => {
	return (
		<Layout title="EXPERTISE" date="Sep 28, 2022">
			<ParagraphLeft>What makes someone an expert?</ParagraphLeft>

			<ParagraphCenter>
				I had always assumed that an expert is someone who knows about a topic
				or any specific thing well enough to be able to explain it to a layman
				in a manner that they&apos;d understand.
			</ParagraphCenter>

			<ParagraphRight>
				Apparently an expert is not that, but rather, to those who insist on
				calling themselves &quot;experts&quot; whenever their point is in
				contention, an expert is about authority.
			</ParagraphRight>
			<ParagraphCenter>
				&quot;No, no... you&apos;re wrong! I&apos;m an EXPERT! And you&apos;re
				wrong!&quot; I&apos;ll just go ahead and say it: it is impossible to be
				an &quot;expert&quot; on a topic in the way that those who call
				themselves experts think it is.
			</ParagraphCenter>
			<ParagraphLeft>
				Then again, maybe calling yourself an expert is not so much about
				knowledge than it is about power and ego.
			</ParagraphLeft>
		</Layout>
	);
};

export default EXPERTISE;
