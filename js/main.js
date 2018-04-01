$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

function addPageContent(cardHeader, cardTitle, cardText, cardFooter, cardAttachment = undefined) {

    // Create content header
    let contentHeader = document.createElement("div");
    $(contentHeader)
        .addClass("card-header")
        .html(cardHeader);

    // Create content body
    let contentBody = document.createElement("div");
    $(contentBody)
        .addClass("card-body")
        // Add title
        .append($(document.createElement("h5"))
            .addClass("card-title")
            .html(cardTitle))
        // Add card text
        .append($(document.createElement("p"))
            .addClass("card-text")
            .html(cardText))
        // Append more stuff if attachment is not === undefined
        .append(typeof(cardAttachment) === "string" 
            ? cardAttachment 
            : "");

    // Create content Footer
    let contentFooter = document.createElement("div");
    $(contentFooter)
        .addClass("card-footer")
        .addClass("text-muted")
        .addClass("text-center")
        .html(cardFooter);

    // Create a card wrapper
    let card = document.createElement("div");
    $(card)
        .addClass("row")
        .addClass("section")
        .append($(document.createElement("div"))
            .addClass("col-sm-12")
            .append($(document.createElement("div"))
                .addClass("card")
                .append(contentHeader)
                .append(contentBody)
                .append(contentFooter)
            )
        );

    // Append to content section
    $('#page-content').prepend(card);
}

let cardHeader  = "Page Creation"
let cardTitle   = "The beginning of CloudyCraft"
let cardBody    = 'With supporting text below as a natural lead-in to additional content.'
let cardDate    = "Friday, 30 March 2018 01:12 UTC+7"

addPageContent(cardHeader, cardTitle, cardBody, cardDate);

let cardHeader1  = "Featured"
let cardTitle1   = "Special title treatment"
let cardBody1    = 'With supporting text below as a natural lead-in to additional content.'
let cardDate1    = "Friday, 30 March 2018 01:30 UTC+7"
let cardAttachment1 = '<a href="#" class="btn btn-primary">Go somewhere</a>'

addPageContent(cardHeader1, cardTitle1, cardBody1, cardDate1, cardAttachment1);