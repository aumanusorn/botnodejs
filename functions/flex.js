
// flex type 0 => PO Status /w gr and /wo gr
function flex_type0(vf0, vf1, vf2, vf3, vf4, vf5, vf6, vf7, vf8) {
    const pr_status = vf0;
    const pr_number = vf1;
    const pr_shorttext = vf2;
    const po_number = vf3;
    const po_qty = vf4;
    const po_unit = vf5;
    const del_date = vf6;
    const gr_qty = vf7;
    const gr_date = vf8;

    var date1 = new Date(vf6.split("/")[1] + "/" + vf6.split("/")[0] + "/" + vf6.split("/")[2]);
    var date2 = Date.now();
    date_diff = Math.floor((date2 - date1.getTime()) / (1000 * 3600 * 24));

    if (date_diff >= 0) {
        due = `Overdue ${date_diff} Days`
        due_color = "#FF0000"
    } else {
        due = `Within ${Math.abs(date_diff)} Days`
        due_color = "#00B050"
    }

    const flex_0 = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "xl",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": `${pr_status}`,
                                    "color": "#ffffff",
                                    "size": "xl",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": []
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR No.",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_number}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Short Text:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_shorttext}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PO No.",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${po_number}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Qty:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${po_qty}` + " " + `${po_unit}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Del Date:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${del_date}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "GR Qty:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${gr_qty}` + " " + `${po_unit}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "GR Date:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${gr_date}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Due:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${due}`,
                                    "wrap": true,
                                    "color": `${due_color}`,
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    return flex_0;
}

// flex type 1 => pr checking, RFQ, compare
function flex_type1(vf0, vf1, vf2, vf3) {
    const pr_status = vf0;
    const pr_number = vf1;
    const pr_shorttext = vf2;
    const pr_reldate = vf3;
    const flex_1 = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "xl",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": `${pr_status}`,
                                    "color": "#ffffff",
                                    "size": "xl",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": []
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR No.",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_number}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Short Text:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_shorttext}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Rel:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_reldate}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
    return flex_1;
}

function flex_type_pr_approval(vf0, vf1, vf2, vf3) {
    const pr_status = vf0;
    const pr_number = vf1;
    const pr_shorttext = vf2;
    const approved_status = vf3;
    const flex_pr_approval = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "md",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 2
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": `${pr_status}`,
                                    "color": "#ffffff",
                                    "size": "md",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 4
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR No.",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_number}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Short Text:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_shorttext}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Approval Status:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": approved_status
                        }
                    ]
                }
            ]
        }
    }

    return flex_pr_approval
}

function flex_type_pr_approval_1(vf0, vf1, vf2, vf3) {
    const pr_status = vf0;
    const pr_number = vf1;
    const pr_shorttext = vf2;
    const approved_status = vf3;
    const flex_pr_approval = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "md",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 2
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": `${pr_status}`,
                                    "color": "#ffffff",
                                    "size": "md",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 4
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR No.",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_number}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Short Text:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_shorttext}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Approval Status:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": approved_status
                        }
                    ]
                }
            ]
        }
    }

    return flex_pr_approval
}

function flex_type_po_approval(vf0, vf1, vf2, vf3, vf4) {
    const pr_status = vf0;
    const pr_number = vf1;
    const pr_shorttext = vf2;
    const pr_reldate = vf3;
    const approved_status = vf4;
    const flex_po_approval = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "md",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 2
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": `${pr_status}`,
                                    "color": "#ffffff",
                                    "size": "md",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 4
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR No.",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_number}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Short Text:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_shorttext}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Rel:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                },
                                {
                                    "type": "text",
                                    "text": `${pr_reldate}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Approval Status:",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 2
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": approved_status
                        }
                    ]
                }
            ]
        }
    }

    return flex_po_approval
}

function flex_type_cc() {
    const flex_cc = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "xl",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "N/A",
                                    "color": "#ffffff",
                                    "size": "xl",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "text",
                            "text": "กรุณาตรวจสอบสถานะที่" + '\n' + "E-Procurement (http://pc.sys.com)" + '\n' + "หรือ ติดต่อพนักงานจัดหาเพื่อสอบถามข้อมูล",
                            "wrap": true,
                            "color": "#666666",
                            "size": "md",
                            "flex": 12
                        }
                    ]
                }
            ]
        }
    }

    return flex_cc;
}

function flex_type_no_match() {
    const flex_no_match = {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "PR Status:",
                                    "size": "xl",
                                    "color": "#aaaaaa",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "N/A",
                                    "color": "#ffffff",
                                    "size": "xl",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 3
                        }
                    ]
                }
            ],
            "backgroundColor": "#006eab"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "text",
                            "text": "รบกวนตรวจสอบเลขที่ PR อีกครั้ง ไม่มีเลขที่ PR ดังกล่าวในระบบ",
                            "wrap": true,
                            "color": "#666666",
                            "size": "md",
                            "flex": 12
                        }
                    ]
                }
            ]
        }
    }

    return flex_no_match;
}

function flex_type_pr_from_ocr(vf0) {
    const pr_number_list = vf0;
    const flex_pr_ocr = {
        "type": "carousel",
        "contents": [
        ]
    }
    function add_bubble(pr_number) {
        return {
            "type": "bubble",
            "size": "micro",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": `${pr_number}`,
                        "color": "#ffffff",
                        "align": "center",
                        "size": "lg",
                        "gravity": "center",
                        "weight": "bold"
                    }
                ],
                "backgroundColor": "#006eab",
                "paddingTop": "19px",
                "paddingAll": "12px",
                "paddingBottom": "16px"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "button",
                        "action": {
                            "type": "message",
                            "label": "Select",
                            "text": `${pr_number}`
                        },
                        "style": "primary",
                        "color": "#B2B2B2",
                        "gravity": "center",
                        "height": "md"
                    }
                ]
            },
            "styles": {
                "footer": {
                    "separator": false
                }
            }
        }    
    }
    pr_number_list.forEach(pr_number => flex_pr_ocr.contents.push(add_bubble(pr_number)))
    return flex_pr_ocr
}


module.exports = {
    flex_type0,
    flex_type1,
    flex_type_pr_approval,
    flex_type_pr_approval_1,
    flex_type_po_approval,
    flex_type_cc,
    flex_type_no_match,
    flex_type_pr_from_ocr
}