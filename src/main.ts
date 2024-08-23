import { Application } from '@hotwired/stimulus';
import ClipboardController from './clipboard_extension_controller';

const application = Application.start();
application.register('clipboard', ClipboardController);
