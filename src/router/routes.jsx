import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';

const user = [
    {
        content: "Bosh sahifa",
        path: "/user-layout",
        icon: <HomeIcon/>
    },
    {
        content: "Guruhlarim",
        path: "/user-layout/groups",
        icon: <GroupsIcon/>
    },
    {
        content: "Sozlamalar",
        path: "/user-layout/settings",
        icon: <SettingsIcon/>
    }
]

export { user }