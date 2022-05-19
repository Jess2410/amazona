import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor: '#203040',
        color: '#fff',
        '& a':{
            color: '#fff',
            marginLeft: 10,
        },
    },
    brand:{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
    },
    navLinks:{
        color: '#fff',
    },
    grow:{
        flexGrow: 1,
    },
    main:{
        minHeight: '80vh',
        
    },
    footer:{
        marginTop: 10,
        textAlign: 'center',
    },
    section:{
        marginTop: 10,
        marginBottom: 10,
    }
})

export default useStyles;