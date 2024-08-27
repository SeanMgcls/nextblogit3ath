import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Sean Glenn Magcalas</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My Name is Sean Glenn Magcalas, I am an 3rd year IT student</p>

      <hr></hr>

        <p><strong>1.  Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</strong></p>

<p>My name is Sean Glenn B. Magcalas, I am 21 years old, and was born on November 30,2002, I am from San Nicolas, Santa Ana, Pampanga. I am inclined with artistic stuff, particularly visual arts and music. Music is a very important part of my life. It helps me explore different feelings and emotions, my favorite music style is rock and my favorite musician/band is The Beatles. I am also a big eater, I am not that picky and my favorite dish is Sinigang. I am an irregular student and before being an IT student, I have taken first Accountancy as my first course. The reason why I shifted is I did not find myself as an accountant, I feel like my mind is not in line with the work there. So I have shifted to BSIT.</p>

<hr></hr>

<p><strong>2.  Why did you take up IT?</strong></p>

<p>Like what I said earlier, I am an irregular student, I am a former student of BSA in the University of the Assumption. When I was in BSA I felt like I was in a cage and my mind was not inclined to the things that I learned from there. I felt like my creativity was of no use there. That is why when I decided to shift, I made sure that I can use my creativity in the next course that I will choose and so I have chosen BSIT. I was always fascinated by how different computer systems work, how people can make something from nothing. I was intrigued with how people use different codes to make something functional, that is why I have chosen BSIT. I want to use my creativity to make something from nothing.
</p>


<hr></hr>

<p><strong>3.  What career do you see yourself exploring after graduation?</strong></p>


<p>I really wanted to be a Graphic Designer, I want to use my creativity as a main skill for my work. 
</p>
<hr></hr>
<p><strong>
4.  What do you expect to learn in this subject?</strong></p>

<p>I expect to know new algorithms and programming languages that will help me to boost my knowledge in programming. I want to experience the feeling of a full stack developer. 
</p>
<hr></hr>
<p><strong>
5.  What topics do you want to be discussed in this subject?</strong></p>

<p>I really want to tackle main back-end programming languages such as JavaScript, Node.js and if possible the new languages like Golang.
</p>

<hr></hr>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}