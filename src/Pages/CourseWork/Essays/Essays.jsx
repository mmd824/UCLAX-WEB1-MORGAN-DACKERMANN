import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <p>
                    <b>HTML</b>
                </p>
                <p>HTML stands for Hypertext Markup Language.</p>
                <ul>
                    <li>
                        Hypertext means text that is organized in a way that
                        connects it to related items.{" "}
                    </li>
                    <li>
                        Markup is a typesetting style guide for a hardcopy and
                        soft copy formats.
                    </li>
                    <li>
                        Language is language that computers understand and use
                        to interpret commands.{" "}
                    </li>
                </ul>
                <p>
                    HTML tags are used to create headings, paragraphs, bulleted
                    lists, embed images and videos, and more.
                </p>
                <p>
                    HTML elements consist of opening and closing tags and the
                    content in between the two.
                </p>
                <p>
                    <b> CSS</b>
                </p>
                <p>
                    CSS stands for Cascading Style Sheet. CSS is a language of
                    style rules used to style web pages. It used in conjunction
                    with HTML to make web pages look pretty by setting
                    backgrounds, fonts, etc. CSS has selectors that point to the
                    HTML elements to be styled and declaration blocks that
                    include a CSS property name and a value, separated by a
                    colon. The declaration is followed by a semi-colon.
                </p>
                <p>
                    <b>JavaScript</b>
                </p>
                <p>
                    JavaScript is what creates the interactive elements in web
                    pages. It is a scripting language that enables the user to
                    creates things such as animated images.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and GiTHub?`}
            >
                <p>
                    <b>Git</b> is a free, open source, version control system,
                    which means it tracks changes to code over time and provides
                    a comprehensive view of those changes. It can handle small
                    to very large projects.
                </p>
                <p>
                    <b>GitHub</b> is a web-based hosting service for
                    repositories. GitHub allows for collaboration and version
                    control. GitHub cannot be used without Git.
                </p>
                <p>
                    Also, fun fact: despite having similar names, Git and GitHub
                    are owned by different companies.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <p>
                    <b>JQuery</b> is a utility library that enables developers
                    to build web apps using JavaScript. JQuery wraps many lines
                    of JavaScript code into methods that can be called with a
                    single line of code. It simplifies complex calls from
                    JavaScript, especially for AJAX and DOM manipulation; so it
                    instead of creating traditional websites, developers can
                    create dynamic ones.
                </p>
                <p>
                    <b>React</b> is an open-source JavaScript library that was
                    created by Facebook in 2011. React allows HTML to be
                    embedded withing JavaScript. It was created to build
                    interactive UI in less time and with more accuracy, which
                    means developers can finish faster and with fewer errors.
                    React also has JSX and virtualDOM that distinguish it from
                    other libraries.
                </p>
            </SingleEssay>
            <SingleEssay question={`Q4: Sample question...`}>
                Answer 4 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
