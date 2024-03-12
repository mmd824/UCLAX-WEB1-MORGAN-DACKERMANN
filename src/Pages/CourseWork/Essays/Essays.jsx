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
                        connects it to related items.
                    </li>
                    <li>
                        Markup is a typesetting style guide for a hardcopy and
                        soft copy formats.
                    </li>
                    <li>
                        Language is language that computers understand and use
                        to interpret commands.
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
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and a Back-End Developer?`}
            >
                <p>
                    <b>Front-End Developer:</b> a Front-End developer deals with
                    all of the elements of a website or application that a user
                    can see. Front-end developers work under two categories: UI
                    and UX. They work either with design teams or individually
                    (depending on the size of the project) to create the user
                    interface (UI) or graphical user interface (GUI). Their goal
                    is to provide an easy-to-navigate and aesthetically pleasing
                    design. The goal is an excellent user experience (UX).
                </p>
                <p>
                    They work with clients and product managers to create a
                    website that the client wants. They are also responsible for
                    testing the website and troubleshooting problems.
                </p>
                <p>
                    <b>Back-End Developer:</b> a Back-End developer works on the
                    parts of a website or application that are not visible to
                    the user. Because the back-end contains coding that makes
                    the website function through developed algorithms and logic,
                    back-end developers work behind the scenes to make sure
                    things run smoothly. They are responsible for
                    everything-including databases, API, and core application
                    logic - operating as it should.
                </p>
                <p>
                    Back-end developers are also responsible for making the
                    sites run efficiently through streamlined processes.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <p>
                    <b>Root Relative:</b> root relative paths come from the
                    site. An @ symbol indicates a root relative path. Root
                    relative paths are universal resources that can be in any
                    combination of subfolders.
                </p>
                <p>
                    <b>Document Relative:</b> document relative paths have
                    `./`or `../` in front of them depending on how far up or
                    down they are. Whole folders can be moved up or down without
                    changing the relationships, but if files are moved around
                    then the dependencies can be broken and will have to be
                    fixed.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q7: What is the difference between jpg, gif, png and svg images?`}
            >
                <p>
                    <b>JPG or JPEG: Joint Photographic Experts Group</b> JPGs
                    are great for photographs because they can support millions
                    of colors, so they are ideal for real-life images. They take
                    up little storage space, so they upload and download
                    quickly. But JPGs have a couple of problems. First, they are
                    “lossy” raster files, which means when data is compressed,
                    unnecessary information is deleted from the file
                    permanently. So, every time the JPG is saved, a small amount
                    of information is lost. Second, JPGs do not support a
                    transparent background. If JPGs are made without a
                    background, it will automatically put in a white background.
                </p>
                <p>
                    JPEGs are the default file format for uploading pictures to
                    the web, unless they need transparency, have text in them,
                    are animated, or would benefit from color changes, like
                    logos or icons.
                </p>
                <p>
                    <b>GIF: Graphics Interchange Format</b> GIFs came on the
                    scene in 1987 to ease the pain out of sending images to or
                    from slow connections, or low bandwidth. GIFs are
                    “lossless,” which means they retain all the data contained
                    in the file. They only accommodate up to 256 indexed colors,
                    making them smaller than JPGs. GIFs were designed for small,
                    simple graphic icons, but they can be animated! Although
                    GIFs do not have audio, theyre still a powerful and fun way
                    to bring motion to online channels.
                </p>
                <p>
                    <b>PNG: Portable Network Graphic</b> JPNGs were invented in
                    1995 as an improvement to the GIF. If the file size is not
                    an issue, for complex images, PNGs are probably the best
                    choice.
                </p>
                <p>
                    PNGs come in two types PNG-8 and PNG-24. PNG-8 means that
                    the file has only 8 bits per pixel and the PNG-24 has 24
                    bits per pixel. PNG-8s, like GIFs, support 256 indexed
                    colors, as well as transparency. PNG-24s, like JPGs, can
                    support up to 16 million colors. PNGs are most often used
                    for static images, like JPGs, but they can also support
                    animation. PNGs also offer alpha transparency which is nice
                    because each individual pixel has its own level of opacity.
                    Like GIFs, PNGs are lossless, so they do not lose data
                    during compression, and they are ideal for detailed
                    graphics, or when you are working with files that are still
                    being edited.
                </p>
                <p>
                    <b>SVG: Scalable Vector Graphic</b> The latest of all the
                    file types, SVGs are a vector image file format released in
                    2001. Unlike raster formats seen in JPG, GIF, and PNG, an
                    SVG image remains crisp and clear at any resolution or size,
                    making them more powerful than other file formats suitable
                    for the web.
                </p>
                <p>
                    SVGs are drawn from mathematically declared shapes and
                    curves, not pixels, so SVGs can be animated, support
                    transparency, and any combinations of colors or gradients.
                    Vector graphics are great for logos and line art because
                    they can be infinitely resized without losing quality or
                    increasing in size. They are great for creating icons and
                    line art for high-resolution displays. .
                </p>
                <p>
                    Like GIFs and PNGs, SVGs are a lossless file format, and
                    they tend to be fairly large files when compared with other
                    formats for the web.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q6: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <p>
                    <b>Product Manager</b> Product managers are responsible for
                    the overall strategy and vision for a product.
                </p>
                <p>
                    <b>Product Owner</b> Product owners are responsible for
                    defining and prioritizing the features and requirements for
                    a product.
                </p>
                <p>
                    <b>Business Analyst</b> Business analysts are responsible
                    for analyzing the business needs of an organization and
                    identifying solutions to business problems.
                </p>
                <p>
                    <b>Scrum Master</b> BScrum Masters facilitate the Scrum
                    process (a project management framework that helps teams
                    structure and manage their work) within an Agile development
                    team. They are responsible for organizing and facilitating
                    various Scrum events, such as Sprint Planning, Daily Scrum,
                    Sprint Review, and Sprint Retrospective.
                </p>
                <p>
                    <b>UX Designer </b> UX (User Experience) focus on creating
                    digital products that are easy and satisfying for users to
                    interact with. They work to understand user needs and
                    behaviors and use that information to create intuitive,
                    user-friendly interfaces and experiences.
                </p>
                <p>
                    <b>Developer/Engineer </b> A software developer in Agile
                    software development writes quality code that meets the
                    functional and non-functional requirements of the user
                    stories. They use tools and techniques such as code reviews,
                    refactoring, debugging, and static analysis to ensure that
                    your code is free of errors, bugs, and vulnerabilities.
                </p>
                <p>
                    <b>QA/SDET </b> Quality assurance engineers, also known as
                    QA engineers or software testers, identify and report
                    defects, bugs, and issues within the software during
                    development and before its release to the public. They
                    create and execute test plans and test cases to verify that
                    the software meets functional and non-functional
                    requirements, such as performance, usability, and security.
                </p>
                <p>
                    <b>DevOps </b> DevOps engineers are responsible for building
                    and maintaining the infrastructure that supports software
                    applications, including servers, databases, and networking
                    systems. This also includes working to monitor and analyze
                    application performance, identify bottlenecks, and optimize
                    resource utilization.
                </p>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
