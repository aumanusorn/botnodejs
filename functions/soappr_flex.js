const flex = require('./flex');
const config = require('./config.json');
const approved_icon = 'https://firebasestorage.googleapis.com/v0/b/pclinechatbot.appspot.com/o/approve_icon.png?alt=media&token=1825c5c8-1719-4ccc-955c-3e6756a1eb67';
const not_approved_icon = 'https://firebasestorage.googleapis.com/v0/b/pclinechatbot.appspot.com/o/deletion_icon.svg.png?alt=media&token=25dfd10c-ab5a-4ded-b67c-f2c12c82032f';

function handleSoapPR_Flex(vPRNo, vPRItem) {
    
    return new Promise((resolve, reject) => {
        var args = { PRNo: vPRNo, ItemOrder: vPRItem };
        var soap = require('soap');
        var url = config.soap_url;
        try {
            soap.createClient(url, (__err, client) => {
                client.GetPRInfo(args, (__err, result) => {
                    let output = 'PR NO. ' + vPRNo + '-' + vPRItem;
                    let vf0 = '';
                    let vf1 = vPRNo + '-' + vPRItem;
                    let vf2 = '';
                    let vf3 = '';
                    let vf4 = '';
                    let vf5 = '';
                    let vf6 = '';
                    let vf7 = '';
                    let vf8 = '';

                    if (result.GetPRInfoResult.diffgram !== null) {
                        const xxx = result.GetPRInfoResult.diffgram.Result.Table1;
                        if (xxx.length === undefined) {
                            if (xxx.APPROVESTATUS === 'APPROVED') {
                                vf0 = 'Checking';
                                vf2 = xxx.SHORTTEXT;
                                vf3 = xxx.RELEASEDATE;
                                output = flex.flex_type1(vf0, vf1, vf2, vf3);
                            } else {
                                vf0 = 'PR Waiting Approved';
                                vf2 = xxx.SHORTTEXT;
                                vf3 = [];
                                if (xxx.AA !== null) {
                                    if (xxx.AA === 'Y') {
                                        // output += '\n- AA Approved';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "AA Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    } else {
                                        // output += '\n- AA Waiting';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "AA Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${not_approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    }
                                } else {
                                    vf3 = [];
                                }

                                if (xxx.SM !== null) {
                                    if (xxx.SM === 'Y') {
                                        // output += '\n- SM Approved';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "SM Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    } else {
                                        // output += '\n- SM Waiting';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "SM Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${not_approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    }
                                }

                                if (xxx.PM !== null) {
                                    if (xxx.PM === 'Y') {
                                        // output += '\n- PM Approved';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "PM Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    } else {
                                        // output += '\n- PM Waiting';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "PM Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${not_approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    }
                                }

                                if (xxx.DM !== null) {
                                    if (xxx.DM === 'Y') {
                                        // output += '\n- DM Approved';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "DM Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    } else {
                                        // output += '\n- DM Waiting';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "DM Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${not_approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    }
                                }

                                if (xxx.MD !== null) {
                                    if (xxx.MD === 'Y') {
                                        // output += '\n- MD Approved';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "MD Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    } else {
                                        // output += '\n- MD Waiting';
                                        vf3.push({
                                            "type": "box",
                                            "layout": "baseline",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "MD Approved"
                                                },
                                                {
                                                    "type": "icon",
                                                    "url": `${not_approved_icon}`,
                                                    "position": "absolute",
                                                    "offsetStart": "40%",
                                                    "offsetTop": "xs"
                                                }
                                            ]
                                        })
                                    }
                                }
                                output = flex.flex_type_pr_approval(vf0, vf1, vf2, vf3);
                            }
                        } else if (xxx[1].PROCESS !== 'PO') {
                            if (xxx[1].PROCESS === 'RFQ' & xxx[2] === undefined & xxx.length <= 2) {
                                vf0 = 'Quotation';
                                vf2 = xxx[1].SHORTTEXT;
                                vf3 = xxx[0].RELEASEDATE;
                                output = flex.flex_type1(vf0, vf1, vf2, vf3);
                            } else {
                                if (xxx[2].PROCESS === 'COMPARE' & xxx[2].APPROVESTATUS === 'COMPARISON' & xxx.length <= 3) {
                                    vf0 = 'Comparison';
                                    vf2 = xxx[2].SHORTTEXT;
                                    vf3 = xxx[0].RELEASEDATE;
                                    output = flex.flex_type1(vf0, vf1, vf2, vf3);
                                } else if (xxx[2].PROCESS === 'COMPARE' & xxx[2].APPROVESTATUS !== 'COMPARISON' & xxx.length <= 3) {
                                    vf0 = 'PO Waiting Approved';
                                    vf2 = xxx[2].SHORTTEXT;
                                    vf3 = xxx[0].RELEASEDATE;
                                    vf4 = [];
                                    if (xxx[2].AA !== null) {
                                        if (xxx[2].AA === 'Y') {
                                            // output += '\n- AA Approved';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "AA Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        } else {
                                            // output += '\n- AA Waiting';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "AA Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${not_approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        }
                                    } else {
                                        vf4 = [];
                                    }

                                    if (xxx[2].SM !== null) {
                                        if (xxx[2].SM === 'Y') {
                                            // output += '\n- SM Approved';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "SM Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        } else {
                                            // output += '\n- SM Waiting';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "SM Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${not_approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        }
                                    }

                                    if (xxx[2].PM !== null) {
                                        if (xxx[2].PM === 'Y') {
                                            // output += '\n- PM Approved';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "PM Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        } else {
                                            // output += '\n- PM Waiting';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "PM Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${not_approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        }
                                    }

                                    if (xxx[2].DM !== null) {
                                        if (xxx[2].DM === 'Y') {
                                            // output += '\n- DM Approved';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "DM Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        } else {
                                            // output += '\n- DM Waiting';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "DM Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${not_approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        }
                                    }

                                    if (xxx[2].MD !== null) {
                                        if (xxx[2].MD === 'Y') {
                                            // output += '\n- MD Approved';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "MD Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        } else {
                                            // output += '\n- MD Waiting';
                                            vf4.push({
                                                "type": "box",
                                                "layout": "baseline",
                                                "contents": [
                                                    {
                                                        "type": "text",
                                                        "text": "MD Approved"
                                                    },
                                                    {
                                                        "type": "icon",
                                                        "url": `${not_approved_icon}`,
                                                        "position": "absolute",
                                                        "offsetStart": "40%",
                                                        "offsetTop": "xs"
                                                    }
                                                ]
                                            });
                                        }
                                    }
                                    output = flex.flex_type_po_approval(vf0, vf1, vf2, vf3, vf4);
                                } else if (xxx[3].PROCESS === 'PO' & xxx.length <= 4) {
                                    vf0 = 'PO Issue';
                                    vf2 = xxx[3].SHORTTEXT;
                                    vf3 = xxx[3].POSAPNUMBER;
                                    vf4 = xxx[3].QUANTITY;
                                    vf5 = xxx[3].UNIT;
                                    vf6 = xxx[3].DELIVERYDATE;
                                    vf7 = '-';
                                    vf8 = '-';
                                    if (xxx[3].GRQUANTITY !== undefined) {
                                        vf7 = xxx[3].GRQUANTITY;
                                        vf8 = xxx[3].GRDATE;
                                    }
                                    output = flex.flex_type0(vf0, vf1, vf2, vf3, vf4, vf5, vf6, vf7, vf8);
                                } else {
                                    output = flex.flex_type_cc();
                                }
                            }
                        } else if (xxx[1].PROCESS === 'PO') {
                            vf0 = 'PO Issue';
                            vf2 = xxx[1].SHORTTEXT;
                            vf3 = xxx[1].POSAPNUMBER;
                            vf4 = xxx[1].QUANTITY;
                            vf5 = xxx[1].UNIT;
                            vf6 = xxx[1].DELIVERYDATE;
                            vf7 = '-';
                            vf8 = '-';
                            if (xxx[1].GRQUANTITY !== undefined) {
                                vf7 = xxx[1].GRQUANTITY;
                                vf8 = xxx[1].GRDATE;
                            }
                            output = flex.flex_type0(vf0, vf1, vf2, vf3, vf4, vf5, vf6, vf7, vf8);
                        } else {
                            output = flex.flex_type_cc();
                        }
                        console.log(JSON.stringify(output))
                        return resolve(output);

                    } else {
                        output = flex.flex_type_no_match();
                        console.log(JSON.stringify(output))
                        return resolve(output);
                    }
                })
            });
        }
        catch (e) {
            return reject(e);
        }
        return null;
    });
}
module.exports = { handleSoapPR_Flex };