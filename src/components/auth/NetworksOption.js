import React from 'react';
import SocialNetworks from './SocialNetworks';

export default function NetworksOption() {
    return (
        <div className="flex flex-row justify-center items-center space-x-3">
            <SocialNetworks
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 48">
                        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                            <g fill="#fff" transform="translate(-176 -55)">
                                <path d="M200.784 55.34v7.574l-4.495.012c-3.524 0-4.203 1.674-4.203 4.12v5.421h8.394l-1.089 8.476h-7.305V103h-8.756V80.943H176v-8.476h7.33v-6.251c0-7.259 4.424-11.216 10.91-11.216 3.092 0 5.76.234 6.544.34z"></path>
                            </g>
                        </g>
                    </svg>
                }
                color={'bg-blue-900'}
                url={'https://www.facebook.com'}
                title={'Facebook'}
            />
            <SocialNetworks
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 512 512"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="#fff"
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        ></path>
                    </svg>
                }
                color={'bg-blue-400'}
                url={'https://www.twitter.com'}
                title={'Twitter'}
            />
            <SocialNetworks
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 48">
                        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                            <g transform="translate(-389 -727)">
                                <g transform="translate(389 727)">
                                    <path
                                        fill="#FBBC05"
                                        d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.456 23.456 0 00.213 24c0 3.737.868 7.26 2.407 10.388l7.905-6.05A13.885 13.885 0 019.827 24"
                                    ></path>
                                    <path
                                        fill="#EA4335"
                                        d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533a23.43 23.43 0 00-21.09 13.071l7.908 6.04a13.849 13.849 0 0113.182-9.51"
                                    ></path>
                                    <path
                                        fill="#34A853"
                                        d="M23.714 37.867a13.849 13.849 0 01-13.182-9.51l-7.909 6.038a23.43 23.43 0 0021.09 13.072c5.732 0 11.205-2.036 15.312-5.849l-7.507-5.804c-2.118 1.335-4.786 2.053-7.804 2.053"
                                    ></path>
                                    <path
                                        fill="#4285F4"
                                        d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-17.618"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                }
                color={'bg-white'}
                border={'border'}
                url={'https://google.com'}
                title={'Google'}
            />
        </div>
    );
}
