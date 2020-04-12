import { useState, useEffect } from "react";
import propType from 'prop-types'


/**
 * Error Handler Form
 * @param {{}} errors - object dari error useForm.
 * @param {string} name - Name of Input.
 * @param {[]} type - type [{type:required, msg:input required}].
 */
export default (errors, name, type) => {
    let data = null
    type.forEach(element => {
        switch (element.type) {
            case "required":
                if (errors[name] && errors[name].type === element.type && true) data = { error: true, helperText: element.msg }
                break
            case "minLength":
                if (errors[name] && errors[name].type === element.type && true) data = { error: true, helperText: element.msg }
                break
        }
    });
    return data
}

