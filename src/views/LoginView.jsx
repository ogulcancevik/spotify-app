import React from 'react'

const LoginView = () => {
  const handleLogin = () => {
    const clientId = 'ef9a15f18952414e9e116886aac229e7'
    const redirectUrl = 'https://spotify-clone-ogulcancevik.netlify.app/login'
    // if you are using localhost, use this redirect url
    // const devRedirectUrl = 'http://127.0.0.1:5173/login'
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scope = [
      'user-read-private',
      'user-read-email',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-top-read',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-follow-read',
      'app-remote-control',
      'streaming'
    ]
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center flex-col">
      <div
        className="p-5 rounded-full px-12 font-medium cursor-pointer"
        style={{
          background: '#1AB26B'
        }}
        onClick={handleLogin}
      >
        Connect Spotify
      </div>
    </div>
  )
}

export default LoginView
