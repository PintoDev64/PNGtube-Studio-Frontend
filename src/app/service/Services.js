function ModelData() {
    const {
        userModel,
        Models,
        routeModels
    } = window.pngtubeAPI.getModels();

    return {
        data: {
            userModel,
            Models,
            routeModels
        }
    }
}

function GlobalData() {
    const {
        colorBackground,
        wallpaperBackground,
        typeBackground,
        wallpaperName,
        brightness,
        hardwareAcceleration,
        trayMenu
    } = window.pngtubeAPI.appConfig();
    
    const files = window.pngtubeAPI.appResources();

    return {
        data: {
            colorBackground,
            wallpaperBackground,
            typeBackground,
            wallpaperName,
            brightness,
            hardwareAcceleration,
            trayMenu,
            files
        }
    }
}

function AppBackgrounds() {
    const AllWallpapersData = window.pngtubeAPI.AppBackgrounds();

    return {
        AllWallpapersData
    }
}

export {
    ModelData,
    AppBackgrounds,
    GlobalData
}