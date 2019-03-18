import '../assets/styles/footer.styl'
export default{
    data(){
        return{
            author: 'Benjamin'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Written by {this.author}</span>
                <br/>
                <a href="https://github.com/1020196987/vue-2.6-webpack-4.29.6-todo" target="_blank">
                    To Author's Github
                </a>
            </div>
        )
    }
}
