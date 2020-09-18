import React from 'react'
import Typography from "@material-ui/core/Typography";
import { Link } from '@material-ui/core';
export default function CopyrightComp() {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit">Tour guide</Link>
			{new Date().getFullYear()}
			{"."}
		</Typography>
        </div>
    )
}
