import React from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";

function AnswerDesc({ answer }) {
    const StyleContainer = styled.div`
        h1,
        h2 {
            color: #1c1f1f;
            margin-bottom: 0.5rem;
        }

        h1 strong,
        h2 strong {
            font-weight: 600;
        }

        h1 {
            font-size: 1.5rem;
            line-height: 2.25rem;
        }

        h2 {
            font-size: 1.25rem;
            line-height: 1.875rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.75rem;
            color: #1c1f1f;
            margin-bottom: 0.5rem;
        }

        img {
            max-width: 500px;
            margin: 1rem auto;
        }

        ol,
        ul {
            padding-left: 3rem;
            list-style-position: outside;
        }

        li {
            display: list-item;
        }

        blockquote {
            font-size: 0.75rem;
            line-height: 1.3rem;
            text-align: center;
            color: #8e999b;
            margin-bottom: 1rem;
        }

        @media only screen and (max-width: 600px) {
            p {
                font-size: 0.875rem;
                line-height: 1.5rem;
            }

            h1 {
                font-size: 1.25rem;
                line-height: 1.875rem;
            }

            h2 {
                font-size: 1rem;
                line-height: 1.75rem;
            }
        }
    `;
    return (
        <StyleContainer>
            <div className="text-b-md">
                {answer ? (
                    <p
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(answer),
                        }}
                        className="set-inner-html text-neutral-700 text-b-md text-justify md:text-b-lg py-3"
                    />
                ) : null}
            </div>
        </StyleContainer>
    );
}

export default AnswerDesc;
