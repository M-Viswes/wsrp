import { Route, Routes } from "react-router";

import GridLayout from "./components/Recognise_page/Grid/grid";
import LoginPage from "./components/Login_page/Login/Login";
import SignUpPage from "./components/Login_page/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import PlaylistLayout from "./components/Playlist_page/PlaylistLayout/PlaylistLayout";
import DashLayout from "./components/Dashboard/DashLayout/DashLayout";
import UpdateProfile from "./components/Login_page/ProfileUpdate/ProfileUpdate";
import ViewPlaylistLayout from "./components/ViewPlaylist/PlaylistLayout/ViewPlaylistLayout";

import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<GridLayout />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/playlists" element={<PlaylistLayout />} />
                    <Route path="/dash" element={<DashLayout />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/UpdateProfile" element={<UpdateProfile />} />
                    <Route
                        path="/viewplaylist"
                        element={<ViewPlaylistLayout />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
