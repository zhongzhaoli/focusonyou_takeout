const api = {
    get_data: () => {
        let url = "https://api.yuntunwj.com/focusonyou/public/takeout";
        return ajax(url);
    }
};