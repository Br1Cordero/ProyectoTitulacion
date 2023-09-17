require ('colors')


const ScannerCtrl = {};


ScannerCtrl.renderScannerCacao = (req, res)=>{
    // res.setHeader('Content-Type', 'text/html');
    res.render('models/cacao')
}


module.exports =  ScannerCtrl