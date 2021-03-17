import React from 'react'
import styled from 'styled-components'

function Footer() {

    const SiteFooter = styled.footer`
        width: 100%;
        position: absolute;
        bottom: 0;
`;

    return (
        <SiteFooter className="site-footer">
            <div className="container">
                <p>&copy;2021. Esther Itolima.</p>
            </div>
        </SiteFooter>
    )
}

export default Footer
