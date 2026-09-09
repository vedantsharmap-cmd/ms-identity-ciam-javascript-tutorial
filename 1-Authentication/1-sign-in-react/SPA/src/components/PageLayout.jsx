import { AuthenticatedTemplate } from '@azure/msal-react';

import { NavigationBar } from './NavigationBar.jsx';

export const PageLayout = (props) => {
    /**
     * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
     * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
     * only render their children if a user is authenticated or unauthenticated, respectively.
     */
    return (
        <>
            <NavigationBar />
            <br />
            <div style={{
  textAlign: 'center',
  padding: '60px 20px',
  borderRadius: '16px',
  background: 'linear-gradient(-45deg, #0078D4, #00B4D8, #7209B7, #0078D4)',
  backgroundSize: '400% 400%',
  animation: 'gradientShift 8s ease infinite',
  color: 'white',
  marginBottom: '30px'
}}>
  <style>{`
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
  <h1 style={{
    fontSize: '2.8rem',
    fontWeight: 800,
    animation: 'fadeInUp 1s ease-out',
    margin: 0
  }}>
    🏥 Welcome to CIAM Demo
  </h1>
  <p style={{
    fontSize: '1.2rem',
    opacity: 0.9,
    animation: 'fadeInUp 1.2s ease-out',
    marginTop: '12px'
  }}>
    MedConnect Health — Secure Patient Identity, Powered by Microsoft Entra External ID
  </p>
</div>
            <br />
            {props.children}
            <br />
            <AuthenticatedTemplate>
                <footer>
                    <center>
                        How did we do?
                        <a
                            href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR_ivMYEeUKlEq8CxnMPgdNZUNDlUTTk2NVNYQkZSSjdaTk5KT1o4V1VVNS4u"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {' '}
                            Share your experience!
                        </a>
                    </center>
                </footer>
            </AuthenticatedTemplate>
        </>
    );
}
