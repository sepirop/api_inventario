const app = require('./app');
const PORT = process.env.PORT || 3001   ;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}