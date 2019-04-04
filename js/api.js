const api = {
    get_data: () => {
        let url = "https://api.yuntunwj.com/focusonyou/public/takeout";
        return ajax(url);
    },
    get_detail: (id) => {
        let url = "https://api.yuntunwj.com/focusonyou/public/takeout/" + id;
        return ajax(url);
    }
};